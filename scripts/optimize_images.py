#!/usr/bin/env python3
"""Shrink the images exported from Figma so the site loads quickly.

- Opaque images become JPEG (quality 82), transparent ones stay PNG (or WebP when still large).
- Everything is capped at MAX_SIDE pixels on the long edge (the map keeps more detail).
- File references in pages/*.html, js/*.js and css/*.css are rewritten when an extension changes.
Safe to run more than once. Run:  python3 scripts/optimize_images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
MAX_SIDE = 1800
LARGE = {"map": 2400, "hero": 2000}
TEXT_FILES = list((ROOT / "pages").glob("*.html")) + list((ROOT / "js").glob("*.js")) + list((ROOT / "css").glob("*.css"))


def has_alpha(im):
    if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
        alpha = im.convert("RGBA").getchannel("A")
        return alpha.getextrema()[0] < 250
    return False


def main():
    renames = {}
    saved = 0
    for path in sorted((ROOT / "assets").rglob("*")):
        if path.suffix.lower() not in (".png", ".jpg", ".jpeg", ".webp", ".gif") or not path.is_file():
            continue
        before = path.stat().st_size
        try:
            im = Image.open(path)
            im.load()
        except Exception as exc:  # noqa: BLE001
            print("skip", path, exc)
            continue
        if getattr(im, "is_animated", False):
            continue
        limit = LARGE.get(path.stem, MAX_SIDE)
        if max(im.size) > limit:
            im.thumbnail((limit, limit), Image.LANCZOS)
        alpha = has_alpha(im)
        if alpha:
            target = path.with_suffix(".png")
            im.convert("RGBA").save(target, optimize=True)
            if target.stat().st_size > 400_000:
                webp = path.with_suffix(".webp")
                im.convert("RGBA").save(webp, quality=85, method=6)
                target.unlink()
                target = webp
        else:
            target = path.with_suffix(".jpg")
            im.convert("RGB").save(target, quality=82, optimize=True, progressive=True)
        if target != path:
            path.unlink(missing_ok=True)
            renames[path.relative_to(ROOT).as_posix()] = target.relative_to(ROOT).as_posix()
        saved += before - target.stat().st_size

    if renames:
        for f in TEXT_FILES:
            text = f.read_text(encoding="utf-8")
            new = text
            for old, nw in renames.items():
                new = new.replace(old, nw)
            if new != text:
                f.write_text(new, encoding="utf-8")
    print(f"optimised; saved {saved / 1e6:.1f} MB; renamed {len(renames)} files")


if __name__ == "__main__":
    main()

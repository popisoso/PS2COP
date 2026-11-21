#!/usr/bin/env python3
"""List missing and unused asset files. Pass --prune to delete the unused ones.
Run after scripts/build.py:  python3 scripts/check_assets.py [--prune]"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
text = "".join(p.read_text(encoding="utf-8") for p in [ROOT / "index.html", *(ROOT / "js").glob("*.js"), *(ROOT / "css").glob("*.css")])
refs = set(re.findall(r"assets/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|svg|gif)", text))
files = {p.relative_to(ROOT).as_posix() for p in (ROOT / "assets").rglob("*") if p.is_file()}

missing = sorted(refs - files)
unused = sorted(files - refs)
print("missing:", *missing, sep="\n  ") if missing else print("missing: none")
print(f"unused: {len(unused)}", *unused, sep="\n  ")
if "--prune" in sys.argv:
    for u in unused:
        (ROOT / u).unlink()
    print(f"pruned {len(unused)} files")
sys.exit(1 if missing else 0)

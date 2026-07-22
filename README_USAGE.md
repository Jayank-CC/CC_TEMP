# How to Use This Claude Code Setup

## 1. Copy the files

Copy these files and folders into the root of your website repository:

```text
CLAUDE.md
PROJECT_STATUS.md
.claude/
  skills/
    replicate-page/
      SKILL.md
  rules/
    html.md
    css.md
    javascript.md
    assets.md
```

Do not put them one directory above or below the project unless that is intentional.

## 2. Start Claude Code from the project root

```powershell
cd "C:\path\to\your\website-project"
claude
```

## 3. Verify configuration

Inside Claude Code, run:

```text
/memory
/context
/skills
```

Confirm that the root `CLAUDE.md`, project rules, and `replicate-page` skill are visible.

If `.claude/skills/` did not exist when the current Claude Code session started, restart Claude Code once.

## 4. Start a page replication

Homepage:

```text
/replicate-page https://www.cloudconverge.io/
```

Inner page with automatic local filename resolution:

```text
/replicate-page https://www.cloudconverge.io/about-us/
```

Inner page with an explicit local target:

```text
/replicate-page https://www.cloudconverge.io/about-us/ about-us.html
```

## 5. During a long task

Check context usage periodically:

```text
/context
```

Before compacting, tell Claude:

```text
Update PROJECT_STATUS.md with the exact current state, files modified, tested viewports, remaining differences, and next action.
```

Then compact with a focus:

```text
/compact Preserve the current reference URL, local target, shared architecture, files modified, measured reference values, completed viewport tests, remaining differences, and exact next action from PROJECT_STATUS.md.
```

## 6. Starting a fresh session

For a new page, first ensure the previous page is stable and `PROJECT_STATUS.md` is updated. Then use `/clear` or start a new Claude Code session.

Invoke the skill again with the new reference URL:

```text
/replicate-page https://www.cloudconverge.io/next-page/
```

The root instructions remain available, while the skill loads only when invoked.

# Versioning Guide

Your Docusaurus documentation is now set up with versioning support.

## Current Structure

- **Current docs** (`docs/`) - These are treated as the latest/current version (beta1.0)
- **Versioned docs** (`versioned_docs/`) - Contains specific versions:
  - `beta1.0/` - Complete documentation (copied from `docs/`)
  - `beta1.1/` - Blank template ready for future updates

## How Versioning Works

1. The `docs/` folder contains your latest/current version (beta1.0)
2. The `versioned_docs/` folder contains snapshots of specific versions
3. Docusaurus automatically creates version dropdown in the navbar
4. Users can switch between versions using the version selector

## Adding Content to beta1.1

To add content to beta1.1:

1. Edit files in `versioned_docs/beta1.1/` directory
2. Update `versioned_sidebars/beta1.1-sidebars.json` to match your structure
3. The version will appear in the navbar dropdown automatically

## Version URLs

- Current version: `/docs/...` (beta1.0)
- beta1.0: `/docs/beta1.0/...`
- beta1.1: `/docs/beta1.1/...`

## Notes

- The `docs/` folder is always treated as the latest version
- Versioned docs in `versioned_docs/` are historical snapshots
- Sidebars for each version are in `versioned_sidebars/`

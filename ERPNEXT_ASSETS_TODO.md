# ERPNext page — assets still to add

## Fastest route: erpnext-assets.zip

All 37 files were already fetched in the browser and packaged as **`erpnext-assets.zip`** (433 KB),
which has been downloaded to your Downloads folder.

Move `erpnext-assets.zip` into `D:\Claude Testing\cloudconverge-replica\` and tell me — I will
extract it into `assets/images/`, apply the one filename correction below, delete the ZIP, and verify
all 37 files resolve.

One name in the ZIP is stale: it contains `erpnext-hero-banner.avif`, but the stylesheet now
references `ERP-Software-banner7.avif`. I will rename it during extraction.

The manual table below remains valid if you would rather add the files yourself.

---


`erpnext-service-provider.html` and `css/pages/erpnext-service-provider.css` already reference every
file below. Download each source URL and save it into `assets/images/` under the **exact local
filename** in the second column. No other change is needed — the page will render complete once
these 37 files exist.

All source URLs share the base `https://www.cloudconverge.io/wp-content/uploads/`.

## Hero and section backgrounds (CSS)

| Source path | Save as | Used by |
|---|---|---|
| `2025/12/ERP-Software-banner7.avif` | `ERP-Software-banner7.avif` | `.erp-hero` background |
| `2021/11/hm-one-bg.jpg` | `hm-one-bg.jpg` | `.erp-industries` background |

## Hero and intro

| Source path | Save as | Rendered size |
|---|---|---|
| `2025/12/banner-graphic.avif` | `erpnext-banner-graphic.avif` | 797×455 |
| `2025/12/erpnext-certified-partner-logo.avif` | `erpnext-certified-partner-logo.avif` | 123×80 |

Note: `assets/images/erpnext-partners-logo.avif` already exists but is the **footer** partner badge —
it is a different image. Do not substitute it.

## Client logos (6, each rendered 144×61)

| Source path | Save as |
|---|---|
| `2025/12/jiva_logo.png` | `jiva_logo.png` |
| `2025/12/teabox-logo.png` | `teabox-logo.png` |
| `2025/12/walnut_logo.png` | `walnut_logo.png` |
| `2025/12/lifelongmed-logo.png` | `lifelongmed-logo.png` |
| `2025/12/gomechanic-logo.png` | `gomechanic-logo.png` |
| `2025/12/kinara-logo.png` | `kinara-logo.png` |

## ERPNext module icons (9, each rendered 65×64)

Prefixed locally with `erpnext-mod-` so they do not collide with existing generic names
such as `cloud-engineering-services.webp` or a future `crm.png`.

| Source path | Save as |
|---|---|
| `2025/12/erpnext-logo.png` | `erpnext-mod-erpnext-logo.png` |
| `2025/12/Frappe-HR.png` | `erpnext-mod-Frappe-HR.png` |
| `2025/12/cloud.png` | `erpnext-mod-cloud.png` |
| `2025/12/learning.png` | `erpnext-mod-learning.png` |
| `2025/12/insights.png` | `erpnext-mod-insights.png` |
| `2025/12/crm.png` | `erpnext-mod-crm.png` |
| `2025/12/helpdes.png` | `erpnext-mod-helpdes.png` |
| `2025/12/lending.png` | `erpnext-mod-lending.png` |
| `2025/12/gameplan.png` | `erpnext-mod-gameplan.png` |

## Service-card icons (5, each rendered 43×43)

| Source path | Save as |
|---|---|
| `2025/11/implementation-icon.png` | `implementation-icon.png` |
| `2025/11/development-icon.png` | `development-icon.png` |
| `2025/11/integration-icon.png` | `integration-icon.png` |
| `2025/11/online-support-icon.png` | `online-support-icon.png` |
| `2025/11/consultant-services-icon.png` | `consultant-services-icon.png` |

## Industry icons (3, each rendered 63×63)

| Source path | Save as |
|---|---|
| `2025/11/Manufacturing_icon.png` | `Manufacturing_icon.png` |
| `2025/11/Industry-icon.png` | `Industry-icon.png` |
| `2025/11/wholesaler_icon.png` | `wholesaler_icon.png` |

## Infographic and pricing

| Source path | Save as | Rendered size |
|---|---|---|
| `2025/12/erpnext-info.avif` | `erpnext-info.avif` | 1140×603 |
| `2025/11/ERPNext-Pricing-and-Cost.avif` | `ERPNext-Pricing-and-Cost.avif` | 350×436 |

## Case-study carousel slides (8, each rendered 1108px wide)

| Source path | Save as |
|---|---|
| `2025/12/ERPNext-s-1.avif` | `ERPNext-s-1.avif` |
| `2025/12/ERPNext-s-2.avif` | `ERPNext-s-2.avif` |
| `2025/12/ERPNext-s-3.avif` | `ERPNext-s-3.avif` |
| `2025/12/ERPNext-s-4.avif` | `ERPNext-s-4.avif` |
| `2025/12/ERPNext-s-5.avif` | `ERPNext-s-5.avif` |
| `2025/12/ERPNext-s-6.avif` | `ERPNext-s-6.avif` |
| `2025/12/ERPNext-s-7.avif` | `ERPNext-s-7.avif` |
| `2025/12/ERPNext-s-8.avif` | `ERPNext-s-8.avif` |

## Optional one-liner

From the repository root, on a machine that can reach cloudconverge.io:

```bash
cd assets/images
B=https://www.cloudconverge.io/wp-content/uploads
curl -sfLO --output-dir . $B/2025/12/ERPNext-s-{1,2,3,4,5,6,7,8}.avif
curl -sfL $B/2025/12/ERP-Software-banner7.avif -o ERP-Software-banner7.avif
curl -sfL $B/2021/11/hm-one-bg.jpg            -o hm-one-bg.jpg
curl -sfL $B/2025/12/banner-graphic.avif      -o erpnext-banner-graphic.avif
curl -sfL $B/2025/12/erpnext-certified-partner-logo.avif -o erpnext-certified-partner-logo.avif
curl -sfL $B/2025/12/erpnext-info.avif        -o erpnext-info.avif
curl -sfL $B/2025/11/ERPNext-Pricing-and-Cost.avif -o ERPNext-Pricing-and-Cost.avif
for f in jiva_logo teabox-logo walnut_logo lifelongmed-logo gomechanic-logo kinara-logo; do
  curl -sfL $B/2025/12/$f.png -o $f.png
done
for f in erpnext-logo Frappe-HR cloud learning insights crm helpdes lending gameplan; do
  curl -sfL $B/2025/12/$f.png -o erpnext-mod-$f.png
done
for f in implementation-icon development-icon integration-icon online-support-icon \
         consultant-services-icon Manufacturing_icon Industry-icon wholesaler_icon; do
  curl -sfL $B/2025/11/$f.png -o $f.png
done
```

Delete this file once all 37 assets are in place.

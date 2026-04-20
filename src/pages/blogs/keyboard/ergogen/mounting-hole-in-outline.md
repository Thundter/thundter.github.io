---
layout: "../../../../layouts/Blog.astro"
title: "Mounting Hole in Outline"
date: "2026-03-15"
tags: ["ergogen", "mounting hole"]
---

To create mounting holes in an Ergogen outline, you define a new outlines section with what: circle and specify the where location using reference points (like matrix_outer_num) and shift values to position them between keys or diodes. This outline is then typically referenced in the cases section to generate the 3D case geometry, or used directly as a footprint in the pcbs section to drill holes in the PCB. 

### Configuration Example
You can define the mounting hole outline and integrate it into your case or PCB design using the following YAML structure:

``` yaml
units:
  screwSize: 1  # Radius for M2 screws

outlines:
  mounting:
    - what: circle
      radius: screwSize
      where:
        ref: [matrix_outer_num]
        shift: [0.5kx, -0.3ky]
    - what: circle
      radius: screwSize
      where:
        ref: [matrix_outer_bottom]
        shift: [0.5kx, -0.3ky]
    # Add more circle entries for other mounting locations

cases:
  _holes:
    - name: mounting
      extrude: 4
  case:
    - what: case
      name: bottom
      operation: add
    - what: case
      name: _holes
      operation: add
```

### Key Implementation Details
- Placement: Use where.ref to anchor the hole to specific matrix points (e.g., matrix_index_num) and where.shift to nudge the hole away from key switches or diodes. 
- PCB vs. Case: While mounting holes can be defined as outlines for 3D printing, they can also be defined as footprints with what: mountinghole (referencing a .js file) for direct PCB drilling. 
- External Files: If using custom mounting hole footprints, ensure the filename is config.yaml and call Ergogen with the folder path (e.g., ergogen .) to recognize local .js files. 
- Hardware: For a sturdier design, these outlines often correspond to holes for threaded screw inserts (3.2mm wide, 3mm tall) which are melted into the plastic case. 
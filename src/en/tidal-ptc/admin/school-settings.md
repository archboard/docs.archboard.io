---
layout: tidal-ptc/layout.njk
title: School Settings | Tidal PTC
description: Configure settings for your school in Tidal PTC.
---

# School Settings

You can find your school settings page by clicking on the settings cog icon on the right side of the top navigation.

<!-- ![Settings menu](/images/tidal-ptc/school-settings-menu.png) -->
<img src="/images/tidal-ptc/school-settings-menu.png" alt="Settings menu" class="sm:w-1/2">

The first section contains an option for the active school and timezone.

- **Active School** - This is the school for which you are viewing teachers and modifying schedules. Changing this selection changes your currently active school.
- **Default Timezone** - You may also set the school's default timezone. This allows a fallback for teachers who don't have a timezone set for their account.

## Availability Settings

The Availability Settings section contains all the settings pertaining to how and when teachers may create time slots and guardians can reserve slots.

- **Allow teachers to manage their time slots** - Enabling this option will allow teachers to create and manage their own time slots.
- **Allow guardians to reserve time slots** - This subsection allows for a highly configurable way to manage when guardians can reserve time slots. Unchecking the option prevents guardians from reserving time slots regardless if you have times configured. The following scenarios assumes that the guardian reservations checkbox is enabled. Times are set are set according to the school's timezone.
  - If no dates or times have been selected, reservations are open.
  - If you set an opening date and time in the future and no closing date, once that date and time are passed, reservations will be open indefinitely.
  - If the opening date is left empty and a closing date is set, reservations will be open now until the closing date and time passes.
  - You can configure an opening and closing date and time. So long as the current date and time fall between those configured, reservations will be opened. Once the closing date and time has passed the reservations will be closed.

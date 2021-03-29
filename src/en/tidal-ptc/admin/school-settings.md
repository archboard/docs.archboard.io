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

## Translator Settings

Tidal PTC allows guardians to request a translator for their conferences. It also has options to add caps to how many translators can be requested.

To give guardians the ability to request a translator, make sure that the "Allow guardians to request a translator" option is checked. Next we need to configure the available languages.

![Translator settings](/images/tidal-ptc/translator-settings.png)

1. Select the desired language from the languages options. The languages added here will populate the list of available languages when guardians reserve time slots.
2. Putting a number in the associated **Maximum requests allowed for the language** field will add a cap for the _total_ number of requests for this language across all time slots. Leave this field blank to prevent any limit to the number of requests.
3. The **Maximum requests allowed at the same time** option will limit the requests for that language _at a particular time_. The slots that are at the same time or overlap will count towards this cap. Leave this field blank to prevent any limit to the number of requests.
4. Once finished, click the "Save Translator Settings" button to save your translator settings.

In the above example, we've added Chinese without any limitations on the total number of requests or same time/overlapping requests.

## User Management

The user management section has a link to the user management page. Learn more about how to [manage users](manage-users).

## Data Sync

Tidal PTC is a direct integration with PowerSchool. This means that you don't need to worry about getting your data into Tidal PTC. The "Start Sync" button will start the process of pulling data from your PowerSchool server. It could take a few minutes, so you'll be notified once the sync is complete.

It syncs the following items:
- Teachers
- Students
- Student enrollment, including course and section information

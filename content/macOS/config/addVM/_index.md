---
title: "Add a virtual machine to backup"
date: 2021-08-29T23:47:50+02:00
lastmod: 2021-08-29T23:47:50+02:00
weight: "2"
draft: false
---
To backup a virtual machine, we are first going to select the Virtual Machine we are about to backup.

We’re back at the options screen

Let’s make our first backup. Adding a virtual machine to Vimalin is done so that you can select it later to backup.

| ![Options screen](Vimalin-2-Options-screen.jpg "Options screen")
|:--:|
| *Options screen* |

### Define a backup job
Click on “Backup jobs” and the following screen appears:

| ![A completely empty “define backup job” screen](Vimalin-2-Configure-Define-Jobs.jpg "A completely empty “define backup job” screen")
|:--:|
| *A completely empty “define backup job” screen* |

The screen is pretty empty, because no virtual machines or jobs have been defined so far.

Click on the “+” button right above the schedule header. With this button you can select a virtual machine.

| ![Select a virtual machine to backup dialog](Vimalin-2-Configure-SelectVM-BossaNova.jpg "Select a virtual machine to backup dialog")
|:--:|
| *Select a virtual machine to backup dialog* |

Vimalin will show a list of all the virtual machines (VM’s) that have been added to the library of VMware Fusion. In our example we are selecting a VM that has Windows 8 installed. It is called “BossaNova x64”, so we select that and then we click on the Add button.

| ![Backup on demand](Vimalin-2-First-Backup-OnDemand.jpg "Backup on demand")

After this we are back in the “Define Backup Jobs” screen. We have a virtual machine in our list, so that we can run backups. As you can see, the “Backup Now” button has become available, because we have selected a virtual machine.

Let’s click that “Backup Now” button to run a backup on demand.
---
title: "Frequently Asked Questions"
date: 2021-08-29T16:18:30+02:00
lastmod: 2021-08-29T16:18:30+02:00
weight: ""
draft: false
---
{{< faq "Why is my Harddisk not visible as a backup target?" >}}
It is by design and it is basically the same reason as that you cannot make backups of Time Machine on your local disk. A backup made to the same backup disk is not a good backup when your disk dies, but that’s not the only reason. Please see this [article](https://www.vimalin.com/why-can-i-not-backup-to-my-main-disk/) for all the reasons.
{{</ faq >}}

{{< faq "What VMware Workstation versions are suported?" >}}
Vimalin for Windows 2.5 is supported on:
VMware Workstation Pro 12.x,
VMware Workstation Pro 14.x,
VMware Workstation Pro 15.x (including version 15.5)
VMware Workstation Pro 16.0 and VMware Player 16.0

We also have users using it successfully on VMware Workstation 10.x, but we do not specifically test against that version. This means that if you bump into an issue while using Workstation 10.x that you will have to work with us in order to get it resolved.
{{</ faq >}}

{{< faq "Is VMware Player supported?" >}}
Yes!
Starting with Vimalin 2.5.481 and VMware Player 16.0 we do now support VMware Player.
{{</ faq >}}

{{< faq "Catalina and 32 bits applications" >}}
Yes, it is true. Vimalin was a 32 bits application until version 2.0

However starting with version 2.5, Vimalin now is a 64 bit application, fully notarized and tested to work OK with macOS Catalina.

Note that is a free update for existing users.
{{</ faq >}}

{{< faq "How is Vimalin licensed?" >}}
For personal, non-commercial use, the user can install and run Vimalin fully licensed on 3 computers that the user owns.

For business use, the user is required to buy a copy for each computer that the user wants to install a fully licensed copy of Vimalin on.

The software comes standard with a 60 day fully functional license.

After those 60 days the software will continue to work as a FREE copy but with limited functionality. The free version will not run scheduled backups, but you can backup on demand. The other limitation is that you do not get email notifications.
{{</ faq >}}

{{< faq "Why would I use Vimalin, I already have Time Machine?" >}}
Time Machine is a wonderful backup utility for many types of files. Unfortunately virtual machines are not a good match for it. Time Machine does not create reliable backups for your virtual machines. The explanation is a bit too long to put here. For the details on the reason why, please read [“Why not to use Time Machine to backup your Virtual Machines“](https://www.vimalin.com/why-is-time-machine-not-a-good-backup-for-virtual-machines/).

The good news is that Vimalin has been designed to make reliable backups of your Virtual Machines. It does so by working together with VMware Fusion and its automation facilities so that proper backups can be made from your VM even when it is running.
{{</ faq >}}

{{< faq "Do I have to install software in the guest OS?" >}}
No extra software has to be installed in the guest OS in order to run and manage your backups.

Vimalin utilizes features offered by VMware Fusion or VMware Workstation to handle the backups on your behalf.
{{</ faq >}}

{{< faq "What happens if I schedule two backups at the same time?" >}}
The worker process handles the backups. As it will work through the job queue it will process the backup jobs accordingly. In non techie speak, backups are staggered, they run one after the other. So you will not end up running two backups at the same time and have a very slow machine.
{{</ faq >}}

{{< faq "What VMware Fusion versions are supported?" >}}
We have tested with VMware Fusion 7,  8.x., 10.x, 11 (including version 11.5) and VMware Fusion 12. Earlier versions are likely to work, but we suggest to try before you buy if you want to use an older version as Fusion 7.
VMware Fusion Player 12 is also supported.
{{</ faq >}}

{{< faq "Can I backup a running virtual machine?" >}}
Absolutely. If your virtual machine is running then Vimalin detects that the machine is running. It then uses the native VMware snapshot technology to be able to make a backup. When you restore the backup, it will look like you suspended the virtual machine.
{{</ faq >}}

{{< faq "Does Vimalin wake up my computer from sleep for a backup?" >}}
No, Vimalin does not mess with your computers sleep schedule. This means that it will not run a backup if you schedule it while your computer is suspended. While this might be useful for some, it would also be horrible for others. Imagine if your laptop would wake up while in a bag during travel.
{{</ faq >}}

{{< faq "What host OS is supported?" >}}
Vimalin for Fusion 2.5 has been tested to work with VMware Fusion running on:

macOS Sierra,
macOS High Sierra,
macOS Mojave,
macOS Catalina and
macOS Big Sur

It probably works on earlier versions of OS X, but we haven’t tested that with Vimalin version 2.5.

Vimalin for Windows 2.5 has been tested with and is supported on

Windows 7, Windows 8 and Windows 10, Windows 2008 R2, Windows Server 2012, Windows Server 2016 and Windows Server 2019.
{{</ faq >}}

{{< faq "Is Vimalin available for free?" >}}
Yes, after the trial period runs out, the program changes into the free version until you install a license. This also means that there is a commercial variant of the program that has a few more features.

If all features are free then eventually development would cease on it. Not because of desire, but because that is what has been learned from working a lot on open source software before. Free software is great, but in order to be able to dedicate time to improve it, money helps.

You can however still use Vimalin without paying for it as we believe that everybody should be able to create good backups.

Running a backup on demand and deleting/restoring your backups is part of the free features.

Scheduling backups so that they run automatically, get email notifications of the result and being able to contact support are all part of what you get when you buy a license.

But we suggest to try before you buy. You can test the full package for 60 days, just [download](https://www.vimalin.com/downloads/) and install. After 60 days Vimalin will revert to the free license and you can continue to use it as long as you want.
{{</ faq >}}

{{< faq "Is the operating system of my virtual machine supported?" >}}
For Vimalin to work, you do not need to install anything into the guest operating system.

As a result ANY operating system that runs under VMware Fusion (or VMware Workstation) can be reliably backed up by Vimalin.
{{</ faq >}}

{{< faq "Why can I not open a backup directly?" >}}
As you might notice if you look at the backups, then there is no .vmx file. This is by design and not to lock you out of your data.

Actually the vmx file is still there, but the file is renamed into having a .vml file extension. The reason for this is to prevent users from opening their backup directly using VMware Fusion or VMware Workstation. Besides that being a bad habit, once you do that Vimalin can no longer verify the data as it will be changed by at least a few bytes. As a result, the signatures made of the files no longer match.

So even if you stop using Vimalin, you can always still recover your backups by renaming the .vml file into a .vmx file.
{{</ faq >}}

{{< faq "Does Vimalin verify the data?" >}}
Yes, before copying the files of data to your backup disk, Vimalin will create a signature of your data file.

This signature is then kept in a database so that it can always be used to verify.

In fact when you restore a Virtual Machine, Vimalin will verify each copied file against that signature to make sure every bit is still the same.

Vimalin uses industry standard MD5 sum hash signatures.

If needed, you can verify the files by hand by looking at the job.metadata file in your backup folder. Note that this file is only kept at the backup folder, not copied to your VM when you happen to restore the virtual machine.
{{</ faq >}}
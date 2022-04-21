---
title: "What is wrong with Time Machine?"
date: 2021-08-29T15:53:26+02:00
lastmod: 2021-08-29T15:53:26+02:00
weight: "3"
icon: "ti-help-alt"
draft: false
description: There’s quite a list of reasons for this. Bear with me for a bit.
type: "docs"
---
## Why is Time Machine not good for making backups of Virtual Machines?

### What is wrong with Time Machine?
Time Machine is an incredibly nice backup program. Basically it is a matter of set and forget. That is pretty amazing and makes it wonderful for many people.

Unfortunately however, it is not very suitable for keeping correct backups of your virtual machines.

There’s quite a list of reasons for this. Bear with me for a bit.

### Backup while running a VM
Let’s see what makes up a virtual machine. A virtual machine consists of a set of files. Some of these files, the virtual disks, are quite large. We’re talking gigabytes here. When your virtual machine is running while TM makes a backup, it might end up being corrupt.

The reason for that is that the virtual machine can still write data to files while the backup process runs. In other words, the file written out as backup is different from what it is on your machine. That is pretty bad for a backup.

In the most recent versions of macOS, the actual copying of a running VM is less dangerous due to APFS disk snapshots. Sadly this doesn’t mean that your backups are safe or that TM is the right tool for the job. You will still lose the active state of the VM (RAM is not copied) and the backup will be like you pulled the power plug on a running machine. On top of that APFS snapshots have their own issues. See more in the excellent Time Machine series by Howard Oakley: [Time Machine 15: Large files including VMs](https://eclecticlight.co/2020/03/02/time-machine-15-large-files-including-vms/)

### Changes in large files
Another issue is that virtual disks are large binary files. This means that when Time Machine makes a backup, it will see the whole virtual disk has changed even if you only changed a small file.
So pretend that you just saved a small document. The file you changed is .. maybe 1MB in size. The update to your Time Machine backup however is gigabytes.

So you do the proper thing and you exclude virtual machines from backups. This is one of the tips in [VMware’s Knowledge base best practices for virtual machine backup](https://kb.vmware.com/s/article/1013628) This is also mentioned by many old timers at the VMware Fusion forum. Even if you do that, you still have a problem.

### TM free disk space management
What if you manually copy your shut down virtual machine to a separate folder, so that Time Machine can back it up. No open files, no problems right? Unfortunately here is another caveat,. A problem arises when your Time Machine backup disk starts to run out of disk space.
The documentation says it will remove the oldest data first. It does, except when it does not.

Time Machine tends to remove larger files first. That actually makes sense for a lot of media types, just not for virtual disks. The default type for virtual disks nowadays is “split into multiple files”. This means that your virtual disk is built up from big binary files also referred to as disk slices.

If one disk slice is missing from your virtual disk, the risk is real that all of your data on that virtual disk is gone. Only a data recovery specialist can help you at that moment. We have a few very good ones down over at the [VMware community forum](https://communities.vmware.com/t5/VMware-Fusion/ct-p/3005-home), but you might want to prevent getting there.

You might decide to not split your disk into multiple files. In that scenario when Time Machine decides to delete the largest file, and your virtual disk happens to be that file then everything from that Virtual Machine is gone too.

### Manual backups
Of course you can make your backups manually by copying them to a static folder every now and then. This however means that you lose one of the main features of Time Machine. “Set and forget”. You now have to remember to make backups on a timely fashion.

As an active community user I have seen too many people depend on Time Machine for backups of their virtual machines and lose their Virtual Machine. Please do not be that next person.

Please make at the very least a manual copy on a regular bases. You can do so [via Finder](https://docs.vmware.com/en/VMware-Fusion/11/com.vmware.fusion.using.doc/GUID-50863728-C156-47B7-B79F-F341FF5E5C9A.html), but if you want, then you can also use Vimalin. Vimalin is fully functional for a trial period of 60 days and can make automatic backups on your behalf. After 60 days it changes into the free version. The free version has the feature to manually create and restore VMs, it is my intention to keep that functionality free.

See the [Free versus Paid](https://www.vimalin.com/documentation/free-versus-paid/) page for all the differences between the two plans.

Of course I would appreciate it if you support my work on Vimalin by buying a license, but you are welcome to use the free version. That certainly is better than depending on Time Machine for your VM backups.

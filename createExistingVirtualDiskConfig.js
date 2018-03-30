//Title: Create Existing Virtual Disk Config
//Description: Used to attach an existing VMDK to a VM
//Inputs: diskFileName [string], controllerKey [number], diskIndex [number], sharingType [string], diskMode [string]
//ReturnType: Any

if(diskIndex != 7){
	// Create Disk BackingInfo
	var diskBackingInfo = new VcVirtualDiskFlatVer2BackingInfo();
	diskBackingInfo.diskMode = diskMode;
	diskBackingInfo.fileName = diskFileName;
	diskBackingInfo.sharing = sharingType;
	System.debug(diskBackingInfo);
	
	//Create Device Connection Info
	var connectable = new VcVirtualDeviceConnectInfo();
	connectable.startConnected = true;
	connectable.allowGuestControl = false;
	connectable.connected = true;
	
	// Create Disk Config Spec VirtualDisk
	var disk = new VcVirtualDisk();
	disk.backing = diskBackingInfo;
	disk.connectable = connectable;
	disk.controllerKey = controllerKey;
	disk.unitNumber = diskIndex;
	
	// Create Device Config Spec
	deviceConfigSpec = new VcVirtualDeviceConfigSpec();
	deviceConfigSpec.device = disk;
	deviceConfigSpec.operation = VcVirtualDeviceConfigSpecOperation.add;
	System.debug(deviceConfigSpec);
} else{
	System.error("Disk index cannot be 7");
}
return deviceConfigSpec;

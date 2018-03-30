#Title: Get Next SCSI Bus Number
#Description: Used to get the next available SCSI but number for a virtual machine
#Inputs: virtualMachine [VC:VirtualMachine]
#ReturnType: Number

//Get next scsi bus number
var devices = virtualMachine.config.hardware.device;
if (devices != null) {
	var highBusNumber = -1;
	for each (device in devices){
		System.debug(device);
		var is_controller = device instanceof VcParaVirtualSCSIController || device instanceof VcVirtualLsiLogicController || device instanceof VcVirtualLsiLogicSASController;
		if (is_controller){
			var contollerKey = device.key;
			var busNumber = device.busNumber;
			System.log("Controller Key: " + contollerKey);
			System.log("Controller Bus Number: " + busNumber);
			if(busNumber > highBusNumber){
				highBusNumber = busNumber;
				System.log("New high bus number is " + highBusNumber);
			} //highBusNumber
		} //is_controller
	} //For each device in devices
	var nextBusNumber = highBusNumber + 1;
	System.log("The next bus nubmer will be: " + nextBusNumber);
} // if device

return nextBusNumber;

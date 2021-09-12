class FHS {
    constructor(IDX, Hospital, Department, Region, State, Room, Bed, DeviceID, DeviceName, Fixed, LWS, MPIID, AIP,
        AIPConDetails, VCGGrouper, HospitalDeviceID, BioMedAssetID, Vendor, VendorContacts, ServerTypeName, 
        ServerConDetails, ServerContent, SoftwareOSDetails, HospitalContacts, CEBioMedContacts, 
        CEBioMedManager, SNOWGroup, AdditionalDocURLs, LastModifiedUser, LastModifiedDateTime ) {
        this.IDX = IDX;
        this.Hospital = Hospital;
        this.Department = Department;
        this.Region = Region;
        this.State = State;
        this.Room = Room;
        this.Bed = Bed;
        this.DeviceID = DeviceID;
        this.DeviceName = DeviceName;
        this.Fixed = Fixed;
        this.LWS = LWS;
        this.MPIID = MPIID;
        this.AIP = AIP;
        this.AIPConDetails = AIPConDetails;
        this.VCGGrouper = VCGGrouper;
        this.HospitalDeviceID = HospitalDeviceID;
        this.BioMedAssetID = BioMedAssetID;
        this.Vendor = Vendor;
        this.VendorContacts = VendorContacts;
        this.ServerTypeName = ServerTypeName;
        this.ServerConDetails = ServerConDetails;
        this.ServerContent = ServerContent;
        this.SoftwareOSDetails = SoftwareOSDetails;
        this.HospitalContacts = HospitalContacts;
        this.CEBioMedContacts = CEBioMedContacts;
        this.CEBioMedManager = CEBioMedManager;
        this.SNOWGroup = SNOWGroup;
        this.AdditionalDocURLs = AdditionalDocURLs;
        this.LastModifiedUser = LastModifiedUser;
        this.LastModifiedDateTime = LastModifiedDateTime;
    }
}

module.exports = FHS;
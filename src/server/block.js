
import SHA256 from 'sha256';



export class block
{
    constructor(index,timestamp,researcherID,projectDirectory,status,acceptanceRate,verifiedBy,previousHash) 
    {
        this.index=index;
        this.timestamp=timestamp;
        this.researcherID=researcherID;
        this.projectDirectory=projectDirectory;
        this.status=status;
        this.acceptanceRate=acceptanceRate;
        this.verifiedBy=verfiedBy;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
    }

    calculateHash() 
    {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.researcherID)+JSON.stringify(this.projectDirectory)+JSON.stringify(this.status)).toString();
    }
}



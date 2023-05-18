export class Observation {
    teacherName: string;
    observationDate: Date;
    observationText: string;
  
    constructor(studentName: string, observationDate: Date, observationText: string) {
      this.teacherName = studentName;
      this.observationDate = new Date();
      this.observationText = '';
    }
  }


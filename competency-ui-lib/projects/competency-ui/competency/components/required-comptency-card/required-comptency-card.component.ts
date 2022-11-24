import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-required-comptency-card',
  templateUrl: './required-comptency-card.component.html',
  styleUrls: ['./required-comptency-card.component.scss']
})
export class RequiredComptencyCardComponent implements OnInit {



  competencyData = [
    {
      title: 'Procurement and Distribution of HCM',
      description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
      requiredLevel: 'level 4'
    },
    {
      title: 'Store management and planning and coordination of THR and Dry ration',
      description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
      requiredLevel: 'level 4'
    },
    {
      title: 'Procurement and Distribution of HCM',
      description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
      requiredLevel: 'level 4'
    },
    {
      title: 'Early Childhood Care Education',
      description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
      requiredLevel: 'level 4'
    },
    {
      title: 'Procurement and Distribution of HCM',
      description: 'Manages procurement and store raw materials for HCMs as per the pre-decided menu Supervises the preparation and distribution of HCM by Anganwadi Helper (AWH)',
      requiredLevel: 'level 4'
    },
    {
      title: 'Early Childhood Care Education',
      description: 'Mobilizes children and conducts ECCE activities as per the yearly activity calendar and the ECCE manual ',
      requiredLevel: 'level 4'
    },
  ]

  panelOpenState: Boolean = true
  customCollapsedHeight = '100px'
  customExpandedHeight = '100px'

  constructor() { }

  ngOnInit() {
  }

  logs = [
    {
      index: 1,
      header: 'Understands HCM guidelines',
    },
    {
      index: 2,
      header: 'Lists raw material required',
    },
    {
      index: 3,
      header: 'Plans for storage',
    },
    {
      index: 4,
      header: 'Motivates the AWH and children on optimal hygiene and handwashing practices',
    },
    {
      index: 5,
      header: 'Course-Name Completion',
    },
    
  ]

}

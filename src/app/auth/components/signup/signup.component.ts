import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }
}

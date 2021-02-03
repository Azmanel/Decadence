import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.css']
})
export class Blog3Component implements OnInit {
  error_text: string = "no_error"
  login: string = "";
  mail: string = "";
  password: string = "";
  password_confirm: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  regFunction() {
    if (this.password !== this.password_confirm) {
      this.error_text = "Пароли не совпадают";
      return;
    }

    let obj = {
      login: this.login,
      password: this.password,
    }

    let json_str = JSON.stringify(obj);
    localStorage.setItem('user_data', json_str);

    this.router.navigate(["/blog3"])
  }
  check() {
    let json_str = localStorage.getItem("user_data");
    if (json_str == null) {
      this.error_text = "Аккаунт не существует"
    } else {
      let user_data = JSON.parse(json_str);

      let login_user_data: string = user_data["login"]
      let password_user_data: string = user_data["password"]

      if (this.login != login_user_data) {
        this.error_text = "Неверный логин";
        return;
      }

      if (this.password != password_user_data) {
        this.error_text = "Неверный пароль";
        return;
      }

      this.router.navigate(["/editor"]);
    }
  }
}





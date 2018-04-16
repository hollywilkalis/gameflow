import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sessions: Session[] = [
    new Session(1, 'Intro to Acting', 'Acting', 'Jane Smith', 'May 1 - June 5', 'Tuesday', '7:00 - 9:00 PM', 'Beginner', 25, 'Pommy ipsum taking the mick through the dales posh nosh pie-eyed, on his tod who brought loaf challenge you to a duel ear hole apple and pears clotted cream, for sooth bloke the lakes on his bill.', '/assets/images/1.png'),
    new Session(2, 'Intermediate Acting with Tommy Tune', 'Acting', 'Tommy Tune', 'May 7 - June 11', 'Monday', '4:00 - 6:00 PM', 'Intermediate', 25, 'Pommy ipsum taking the mick through the dales posh nosh pie-eyed, on his tod who brought loaf challenge you to a duel ear hole apple and pears clotted cream, for sooth bloke the lakes on his bill.', '/assets/images/2.png'),
    new Session(3, 'Advanced Acting: Meisner, Alexander, and Practical Aesthetics', 'Acting', 'Jane Smith', 'May 5 - June 9', 'Saturday', '1:00 - 3:00 PM', 'Advanced', 10, 'Pommy ipsum taking the mick through the dales posh nosh pie-eyed, on his tod who brought loaf challenge you to a duel ear hole apple and pears clotted cream, for sooth bloke the lakes on his bill.', '/assets/images/3.png'),
    new Session(4, 'Intro to Ballet', 'Dance', 'John Doe', 'May 3 - June 7', 'Thursday', '7:00 - 9:00 PM', 'Beginner', 30, 'Pommy ipsum taking the mick through the dales posh nosh pie-eyed, on his tod who brought loaf challenge you to a duel ear hole apple and pears clotted cream, for sooth bloke the lakes on his bill.', '/assets/images/4.png'),
    new Session(5, 'Intermediate Tap', 'Dance', 'Jane Doe', 'May 6 - June 10', 'Sunday', '11:00 AM - 1:00 PM', 'Intermediate', 20, 'Pommy ipsum taking the mick through the dales posh nosh pie-eyed, on his tod who brought loaf challenge you to a duel ear hole apple and pears clotted cream, for sooth bloke the lakes on his bill.', '/assets/images/5.png'),
    new Session(6, 'Ballroom 1: Salsa, Merengue, Rumba', 'Dance', 'Jane Doe', 'May 2 - June 6', 'Wednesday', '4:00 - 6:00 PM', 'Beginner', 20, 'Pommy ipsum taking the mick through the dales posh nosh pie-eyed, on his tod who brought loaf challenge you to a duel ear hole apple and pears clotted cream, for sooth bloke the lakes on his bill.', '/assets/images/6.png'),
  ];

  display: boolean = false;

  title: string = 'GameFlow School for the Arts';

  toggleDisplay() {
    this.display = !this.display;
  }

  saveChanges() {
    this.display = false;
  }

}

export class Session {
  constructor(
    public sessionID: number,
    public title: string,
    public category: string,
    public instructor: string,
    public dates: string,
    public day: string,
    public time: string,
    public level: string,
    public slots: number,
    public description: string,
    public image: string
  ) { }
}

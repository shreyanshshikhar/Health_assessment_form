import { Component ,OnInit} from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public name:string="";
constructor(private questionService:QuestionService){

}
ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getAllQuestion();
}
getAllQuestion(){
this.questionService.getQuestionJson()
.subscribe(res=>{
  console.log(res.questio);
})
}
}

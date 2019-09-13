import {Component, Inject, OnInit} from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {User} from '../model/user';
import {VacancyService} from '../service/vacancy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public flag: boolean;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private vacancyService: VacancyService) {
  }


  ngOnInit() {
    console.log('from session storage');
    const data = this.storage.get('user');
    console.log(data.id);

    this.vacancyService.getInspection(data.id).subscribe(
      user => {
        console.log('Response: ');
        this.flag = user;
        console.log('flag - ' + user);
      },
      err => {
        console.log(err);
      }
    );
  }

  rules() {
    alert('Правила поведения при проверке: \n' +
      '(с возможностью проставить признак - выполнено/нет)\n' +
      'Правила вывести списком с возможностью открыть детальное описание нажатием.\n' +
      '\n' +
      '        1. Проверить полномочия контролера.\n' +
      '       Попросите его предъявить служебное удостоверение, а также сделать для себя запись ФИО и иной информации о проверяющем (№ удостоверения, кем и когда выдано, должность и так далее). Проверьте, чтобы лицо, указанное в таком документе, совпадало с лицом, предъявившем удостоверение. Проверьте копию направления на проверку.\n' +
      'В направлении на проведение проверки должны обязательно указываться:\n' +
      'наименование органа государственного надзора (контроля), который осуществляет проверку; \n' +
      'точное наименование вашего предприятия, его местонахождение; \n' +
      'номер и дата приказа, где зафиксирована информация о данной проверке; \n' +
      'перечень должностных лиц, участвующих в проведении проверки, с указанием их должности, фамилии, имени и отчества; \n' +
      'даты начала и окончания проверки; тип проверки (плановая или внеплановая); \n' +
      'основания для осуществления проверки; \n' +
      'предмет проверки. \n' +
      'Подготовьте журнал регистрации проверок. \n' +
      '\n' +
      '    2. Незамедлительно сообщить руководителю о проверке.\n' +
      '      Научите ваших сотрудников, стафферов и всех тех, кто временно оказывает Вам услуги на территории Вашего офиса, незамедлительно сообщать руководителям о предстоящей проверке.\n' +
      '\n' +
      '    3. Записывать ход проверки на видео или аудио.\n' +
      '       Видео- и аудио-съемка собственных помещений не запрещена, поэтому остановить вас в использовании этого права сотрудники контролирующих органов не вправе. \n' +
      '       Кроме того, такое правомочие предоставлено налоговым органам (п. 4 ст. 92 НК). \n' +
      '       Фиксация хода проведения проверки, вопросов и требований контролеров облегчит процесс доказывания нарушений с их стороны, а также позволит избежать явных и откровенных правонарушений и случаев превышения полномочий.\n' +
      '\n' +
      '    4. Отвечать на вопросы контролеров строго в рамках трудовой функции.\n' +
      '       Важно, чтобы каждый работник отвечал только на те вопросы, которые непосредственно относятся к его трудовой функции, закрепленной в трудовом договоре и должностных инструкциях.\n' +
      '\n' +
      '    5. Передавать документы только по описи.\n' +
      '       Все документы компании должны передаваться контролерам строго по акту приема-передачи. \n' +
      '       Такой акт должен содержать список всех передаваемых документов, с указанием количества страниц, а также обозначением того, передаются оригиналы или копии документов. Акт составляется в двух экземплярах и подписывается представителями компании и контролирующего органа. \n' +
      '       Один экземпляр акта остается в компании. Это необходимо для того, чтобы в случае утери проверяющим органом копий вы смогли доказать, что они были переданы в ходе проверки.\n' +
      '\n' +
      '    6. Изъятие оригиналов документов.\n' +
      '       Оригиналы документов подлежат изъятию в исключительных случаях. \n' +
      '       Например, налоговые органы вправе произвести выемку подлинников лишь в случае, если для осуществления контроля недостаточно копий, и у налогового органа есть достаточные основания полагать, что подлинники документов могут быть уничтожены, сокрыты, исправлены или заменены (п. 8 ст. 94 НК РФ). \n' +
      '       При этом при изъятии таких документов с них изготавливают копии, которые заверяются должностным лицом налогового органа и передаются лицу, у которого они изымаются.\n' +
      '       !!! Документы, в отношении которых в компании установлен режим коммерческой тайны, могут изыматься только на основании судебного решения (ч. 3 ст. 183 УПК РФ)\n' +
      '\n' +
      '    7. Повторная проверка.\n' +
      '       Налоговый орган не вправе проводить две и более выездные налоговые проверки по одним и тем же налогам за один и тот же период (пп. 4, 5 ст. 89 НК РФ).');
  }

  warningg(){
    alert('При проведении проверки необходимо обращать внимание:\n' +
      'Представитель Налоговой инспекции, проводящий проверку, вправе запрашивать у проверяемого лица необходимые документы.\n' +
      'Перечень конкретных документов оформляется соответствующим Требованием о предоставлении документов (информации). – вставить ссылку на форму - https://www.nalog.ru/rn77/taxation/reference_work/measures_tax_control/istreb_doc_kr/\n' +
      'В настоящее время из массы для проверки исключены:\n' +
      'бумаги, которые уже были ранее представлены инспекторам;\n' +
      'документы, содержащие сведения, имеющиеся в распоряжении госорганов и в официальных госреестрах (выписки из ЕГРЮЛ, ЕГРИП, сведения о численности работников и т. д.).\n' +
      'В случае, если представитель Налоговой инспекции, проводящий проверку, находится на территории проверяемого, Требование о предоставлении документов (информации) передается руководителю или физическому лицу (их законному или уполномоченному представителю) лично под расписку.\n' +
      'Если таким образом передать Требование невозможно, оно направляется по почте заказным письмом и считается полученным по истечении 6 (шести) дней с даты направления заказного письма, или передается в электронной форме по телекоммуникационным каналам связи, или через Личный кабинет налогоплательщика.\n' +
      'Требуемые документы представляются в виде заверенных копий. Копии заверяются подписью ее руководителя (заместителя руководителя) и/или иного уполномоченного лица и печатью этой организации, если иное не предусмотрено законодательством Российской Федерации.\n' +
      'Обратите внимание, что НЕ допускается требование нотариального удостоверения копий документов, представляемых в налоговый орган (должностному лицу), если иное не предусмотрено законодательством Российской Федерации.\n' +
      'Листы документов, представляемых на бумажном носителе, должны быть пронумерованы и прошиты в соответствии с требованиями, утверждаемыми федеральным органом исполнительной власти, уполномоченным по контролю и надзору в области налогов и сборов - http://base.garant.ru/72135164/2c582bd7512af06ea071fe2518eb92a7/#block_18000.\n');
  }
}


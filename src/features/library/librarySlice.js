import { createSlice } from '@reduxjs/toolkit';

const path = 'https://grmnche.github.io/files';

export const librarySlice = createSlice({
  name: 'library',
  initialState: {
    books: {
      chernyshev: [
        {
          id: 1,
          title: 'Рыба на мелководье',
          series: 'Безумие Таргерта',
          bookNumber: 'Книга 1',
          description:
            'Королевство Таргерт заполонили выродки, немые создания, приводящие всех в ужас. Жители вынуждены растить детей в страхе перед кровавым светом их глаз, что мерцает в ночи. Может, и Сырость, отвратительная неизлечимая болезнь, и гадкие белые мухи, и исчезновение короля - всё по их вине? Над сапожником Вайтешем тяготеет проклятье детства, связанное с появлением выродков. Он не чувствует себя в безопасности даже в собственной спальне. И не зря. Ведь выродки - далеко не самое страшное, что таится во тьме Таргерта...',
          image: './assets/images/fish.jpg',
          quote: 'Кровь, которую не видно на снегу',
          url: `${path}/guard.epub`,
        },
        {
          id: 2,
          title: 'Шелест сорняков',
          series: 'Безумие Таргерта',
          bookNumber: 'Книга 2',
          description:
            'Таргерт ещё не оправился от последствий страшной резни, как возвращается пропавший король. Вдобавок выродки, десятилетиями хранившие молчание, заговорили. Оттого ли, что новая жена короля – одна из них? Но теперь те, кого жители боялись и ненавидели, заняли рядом с ними равноправное место. Недовольство народа растёт, по всему королевству находят истерзанные трупы, неизлечимая Сырость продолжает уносить жизни. Лавочник Хэмри неожиданно узнаёт о своём высоком происхождении. Он получает от погибшего дяди-барона богатое наследство и титул. Странно, что отец Хэмри в своё время порвал все связи со знатной роднёй и ни словом не обмолвился о ней сыну...',
          image: './assets/images/rustle.jpg',
          quote: 'Кто расплатится за виновных?',
          url: `${path}/guard.epub`,
        },
        {
          id: 3,
          title: 'Свет Неутешенных',
          series: 'Глубины ксоотов',
          bookNumber: 'Книга 1',
          description:
            'Королевство Коггвот поглотил Корневой Мор, сеющий безумие и разруху. Из гигантских Корней рождаются загадочные уродцы - ксооты. Смертельная болезнь Сырость уносит жизни. К тому же горожане замечают в окрестностях чудовищных Собак. Даже король в ужасе от происходящего бросает трон и государство на произвол судьбы. Шахтёр Креупци болен: его глаза поражены странным недугом, ещё немного и он ослепнет. В поисках исцеления он попадает в святилище, где жрецы молятся таинственной силе - Ясности. Они надеются, что их вера спасёт королевство от Корневого Мора. Но не станет ли Ясность ещё худшим злом?..',
          image: './assets/images/light.jpg',
          quote: 'Не бойся темноты. Свет страшнее',
          url: `${path}/guard.epub`,
        },
      ],
      holmov: [
        {
          id: 1,
          title: 'Танец со стулом',
          series: 'Точка активации',
          bookNumber: 'Книга 1',
          description:
            'Опасен ли прогресс для человечества? Техногенная катастрофа? Бунт машин? Вы серьезно? Мы же только из-за прогресса и живы до сих пор. Давайте не будем. Считайте, мы в океане, выбрали курс — все, надо плыть. Тем более, завтра с утра на работу... В конце 22 века в английской деревушке Мейденс Грин, в обычной семье росли двое мальчишек. Беда положила конец счастливому детству. Братьям предстоит искать свое место в мире, где уже до их рождения все было далеко не в порядке... А в это время Кэрол просто хочет спать.',
          image: './assets/images/activation-point1.jpg',
          url: `${path}/the-light-of-the-inconsolable.epub`,
        },
        {
          id: 2,
          title: 'Маленький кирпичный дом',
          series: 'Точка активации',
          bookNumber: 'Книга 2',
          description:
            'Продолжение истории братьев Барнетов и другой публики мрачного Лондона 2200-х. Что решит Дэвид, лучший андроид-инженер Великобритании? Будет ли Кейси ночевать под мостом? Куда девалась Ада Ройзбах? Какую тайну хранит Великий и Непостижимый Гроссмайер и что замышляет злобный министр Данкрофт? Удастся ли пакерам... Тс-с-с. И Кэрол, оставленная нами у окна в одиночестве и растерянности... Станет ли она "Еленой-X", как мечтала, или пойдет по другому пути? И какое будущее ждет андроидов - а с ними и всю страну?',
          image: './assets/images/activation-point2.jpg',
          url: `${path}/the-light-of-the-inconsolable.epub`,
        },
      ],
    },
    stories: {
      chernyshev: [
        {
          id: 1,
          name: 'guard',
          title: 'Стражник',
          series: 'Апокрифы Квёлых Земель',
          description:
            'Иногда выполнить долг - значит подвергнуть себя смертельной опасности. Неважно, готов ты к ней или нет. Важно - сможешь ли ты выбраться живым. Нерори не был готов к ночному нападению. Стражницкий капюшон ещё не делает его стражником, а меч в руке - воином. И всё же патрульный мёртв, и тварь, убившая его, убьёт опять. Чтобы помешать этому, надо всего лишь пойти за ней в темноту…',
          image: './assets/images/guard.jpg',
          quote:
            'Должно быть, он тоже боялся. Но по-другому. Более достойно. Более сдержано. Как будто страх – лишь часть работы. Его работы.',
          url: `${path}/guard.epub`,
        },
        {
          id: 2,
          name: 'grinding',
          title: 'Скрежет замков',
          series: 'Апокрифы Квёлых Земель',
          description:
            'С приходом ночи в Тэрсву не закрывают двери на ключ и не выходят наружу. "Щёлк-щёлк", - споёт замок, и ты будешь спать в безопасности, запертый в собственном доме… Ключники. Так их называют. Те, кто запирает двери. Хотя плотник Рецени уверен, что это всего лишь городская выдумка. До тех пор, пока к нему не заявляется его соседка со взволнованным заказом. Её дверь выпала из проёма, а сумерки близятся. Но не всё ли равно?..',
          image: './assets/images/grinding.jpg',
          quote:
            '– Не всё ли одно, кто я такой? Я отпираю засовы там и тут. Этого достаточно.',
          url: `${path}/rattle-of-locks.epub`,
        },
        {
          id: 3,
          name: 'business',
          title: 'Дело, не терпящее отлагательств',
          series: 'Апокрифы Квёлых Земель',
          description:
            'Не все болезни поражают тело. И не всякое безумие сказывается на рассудке. Такова сырость. Она бледная, как кровь заражённых, бесчувственная и сырая, как их разум. Она рвёт любовь матери к своему ребёнку, уничтожает всякую привязанность, упраздняет всё, что дорого. Нет исцеления от такой хвори. Или всё же..? Ривлик верит, что есть. Его записи полны невнятных наблюдений, но поможет ли хотя бы одно из них? Садрад в этом сомневается. А может, просто боится, что его друг разделит судьбу сыростных, которые бесследно исчезают?..',
          image: './assets/images/business.jpg',
          quote:
            '– Но ты не сможешь в одиночку одолеть сырость, Ривлик. Ты просто сам заразишься, если будешь якшаться с умирающими от неё.',
          url: `${path}/matter-that-cannot-be-delayed.epub`,
        },
        {
          id: 4,
          name: 'shirt',
          title: 'Новая сорочка',
          series: 'Апокрифы Квёлых Земель',
          description:
            '"Некоторые считали жителей Фаалт Мотефика скопищем сбрендивших полоумцев, роящихся в своём городишке над старинными фолиантами подобно пчёлам в улье. Иные утверждали, что пчёлы не проводят свою жизнь так бездарно".',
          image: './assets/images/shirt.jpg',
          quote: '– Ты позвал меня, чтобы показать мне сорняк, дядюшка?',
          url: 'https://grmnche.github.io/files/new-shirt.epub',
          url: `${path}/new-shirt.epub`,
        },
        {
          id: 5,
          name: 'dragon',
          title: 'Когда дракон покидает логово',
          description:
            '"Уилмс и Ко", компания по производству алкогольной продукции, ведёт маркетинговую войну со спиртным магнатом Шоном Риггесом, расстраивающим их планы. И чем дальше, тем меньше эта война походит на простые торговые неурядицы. Риггес неумолимо переманивает на свою сторону союзников компании. Кажется, для Уилмс и Ко настало время сотрудничать… Но разве с драконами ведут переговоры?',
          image: './assets/images/dragon.png',
          quote:
            '– Знаете, меня всегда забавляло, что люди боятся драконов. В сказках они предстают могучими крылатыми тварями, кошмарящими округу, а в действительности... их башня укрывает вовсе не их золото, а их самих. Они заперты в ней, в каком-то смысле. И, как по мне, так и должно быть. Дракону место в башне. Когда он покидает логово, в своей дальнейшей судьбе, как бы скверно она ни сложилась, он виноват сам.',
          url: `${path}/when-the-dragon-leaves-the-lair.epub`,
        },
        {
          id: 6,
          name: 'turmoil',
          title: 'Семейные неурядицы',
          series: 'Апокрифы Квёлых Земель',
          description:
            'Нора обращается к своей сестре-правительнице за помощью. Она опасается, что её муж Гарнельд тронулся умом — он говорит, что узрел какой-то свет. Может, он, и правда, безумен? Или всё-таки…',
          image: './assets/images/turmoil.jpg',
          quote:
            '– Я не могу объяснить... Его взгляд меня пугает... он надолго уходит из дома, иногда по ночам. Как-то я проснулась от того, что ветер захлопнул входную дверь... Мы живём в тревожном месте, Квёлые Земли пользуются плохой репутацией даже среди их обитателей, а он... забыл запереть дверь?',
          url: `${path}/family-troubles.epub`,
        },
        {
          id: 7,
          name: 'insomnia',
          title: 'Беспробудная бессонница',
          series: 'Апокрифы Квёлых Земель',
          description:
            'Загадочный проповедник сулит Келли исцеление от жутких кошмаров, но взамен требует одну услугу...',
          image: './assets/images/insomnia.jpg',
          quote:
            '– Кошмар, в сущности, такой же сон. Но люди боятся кошмаров, не снов.',
          url: `${path}/intense-insomnia.epub`,
        },
        {
          id: 8,
          name: 'justice',
          title: 'Божественная справедливость',
          description:
            'Слабохарактерный Кельвет, унаследовавший от отца ростовщическую лавку, пытается вернуть одолженные им деньги, но каждый заёмщик находит причину не рассчитываться, ставя под угрозу репутацию новоиспечённого ростовщика.',
          image: './assets/images/justice.jpg',
          quote:
            '– А что, по-вашему, все жрецы сплошь благочестивцы? Бросьте, ростовщик. Нельзя стать по-настоящему честным человеком, не побыв обманщиком.',
          url: `${path}/divine-justice.epub`,
        },
      ],
      holmov: [
        {
          id: 1,
          title: 'Неторопливый',
          description:
            'Хочешь жить – поторапливайся! Ты должен добыть руду и уголь, ты должен запастись едой, сшить одежду и обувь, пока не настали холода. Ты должен убежать от Твари. Так жили гномы Северной стороны тысячу лет. И вот пришел Он...',
          image: './assets/images/leisurely.jpg',
          quote:
            '– Я думаю. – Незнакомец смотрел на Дара ясным взглядом. – Думаю, что ответить на твой вопрос.',
        },
        {
          id: 2,
          title: 'Себастьян Ван Рейн',
          description:
            'Начало девятнадцатого века, Европа. Молодой человек, потерявший отца, приезжает в Валахию, чтобы разгадать загадку проклятия, тяготеющего над его семьей.',
          image: './assets/images/s-van-rein.jpg',
          quote:
            'Затих глухой стук босых ног и шарканье ладоней по доскам. Себастьян вцепился в перила так, что ногти вонзились в дерево. Пот тек по его лицу.',
        },
        {
          id: 3,
          title: 'Бесконечная война',
          description:
            'Наверно, каждый мальчишка в детстве бегал с игрушечным ружьем, расставлял по полу солдатиков и танки. Это не значит, что все хотели на войну. Но война не спрашивает человека, когда приходит к нему. И игра может затянуться...',
          image: './assets/images/endless-war.jpg',
          quote:
            'Выстрела не последовало, зато через несколько секунд на той стороне – совсем не там, где, по его предположению, должен был находиться вражеский стрелок, – из камней насмешливо поднялась почти на метр камуфляжная шапка, демонстративно надетая на палку, и несколько раз качнулась вправо-влево.',
        },
        {
          id: 4,
          title: 'Голубые Гавайи',
          description:
            'Жизнь и игра прорываются друг сквозь друга. Выстрелы, огонь, кровь... Шелест волн... Очередь в супермаркете... Где настоящая память, а где фантомная, где человек, где компьютер, и что записано на твоих дисках, и где от них пароль, кто же это помнит? Может, она?..',
          image: './assets/images/hawaii.jpg',
          quote:
            '– Могу, – Крис хмуро изучал штанины суперагента. Языки пламени не могли пробраться сквозь них, наверно, каким-то составом пропитаны, вот они, суперагенты, в этом они все. Штаны с пропиткой, а бронежилет не выдают, плати.',
        },
      ],
    },
  },
  reducers: {
    addStory: (state) => {},
    showStories: (state) => {},
  },
});

export const { addStory, showStories } = librarySlice.actions;

export default librarySlice.reducer;

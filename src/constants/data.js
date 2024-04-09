import decor1 from '../static/image/decor1.jpg';
import decor2 from '../static/image/decor2.png';
import decor3 from '../static/image/decor3.png';
import decor4 from '../static/image/decor4.png';
import decor5 from '../static/image/decor5.png';
import decor6 from '../static/image/decor6.png';
import decor7 from '../static/image/decor7.png';
import decor8 from '../static/image/decor8.png';
import decor9 from '../static/image/decor9.png';
import decor10 from '../static/image/decor10.png';
import decor11 from '../static/image/decor11.png';
import decor12 from '../static/image/decor12.png';
import decor13 from '../static/image/decor13.png';
import decor14 from '../static/image/decor14.png';
import decor15 from '../static/image/decor15.png';
import decor16 from '../static/image/decor16.png';
import decor17 from '../static/image/decor17.png';
import decor18 from '../static/image/decor18.png';
import decor19 from '../static/image/decor19.png';
import decor20 from '../static/image/decor20.png';
import decor21 from '../static/image/decor21.png';
import decor22 from '../static/image/decor22.png';
import decor23 from '../static/image/decor23.png';
import decor24 from '../static/image/decor24.png';
import decor25 from '../static/image/decor25.png';
import pattern1 from '../static/image/pattern1.png';
import pattern2 from '../static/image/pattern4.png';
import pattern3 from '../static/image/plus.png';
import pattern4 from '../static/image/bricks.png';
import pattern5 from '../static/image/pattern2.png';
import pattern6 from '../static/image/pattern3.png';
import pattern7 from '../static/image/pattern5.png';
import pattern8 from '../static/image/pattern6.png';

const decors = [
        {id:'1', color:`${decor1}`},
        {id:'2', color:`${decor2}`},
        {id:'3', color:`${decor3}`},
        {id:'4', color:`${decor4}`},
        {id:'5', color:`${decor5}`},
        {id:'6', color:`${decor6}`},
        {id:'7', color:`${decor7}`},
        {id:'8', color:`${decor8}`},
        {id:'9', color:`${decor9}`},
        {id:'10', color:`${decor10}`},
        {id:'11', color:`${decor11}`},
        {id:'12', color:`${decor12}`},
        {id:'13', color:`${decor13}`},
        {id:'14', color:`${decor14}`},
        {id:'15', color:`${decor15}`},
        {id:'16', color:`${decor16}`},
        {id:'17', color:`${decor17}`},
        {id:'18', color:`${decor18}`},
        {id:'19', color:`${decor19}`},
        {id:'20', color:`${decor20}`},
        {id:'21', color:`${decor21}`},
        {id:'22', color:`${decor22}`},
        {id:'23', color:`${decor23}`},
        {id:'24', color:`${decor24}`},
        {id:'25', color:`${decor25}`},
];

const patterns = [
        {id:'1', pattern:`${pattern1}`},
        {id:'2', pattern:`${pattern2}`},
        {id:'3', pattern:`${pattern3}`},
        {id:'4', pattern:`${pattern4}`},
        {id:'5', pattern:`${pattern5}`},
        {id:'6', pattern:`${pattern6}`},
        {id:'7', pattern:`${pattern7}`},
        {id:'8', pattern:`${pattern8}`},
        {id:'9', pattern:``},
];

const verticalButtons = [
        {id:'1',name:'Decor Top Facade',value:'topFacade'},
        {id:'2',name:'Decor Wall panel',value:'wallPanel'},
        {id:'3',name:'Pattern Wall panel',value:'pattern'},
        {id:'4',name:'Decor Counter Top',value:'counterTop'},
        {id:'5',name:'Decor Bottom Facade',value:'facade'},
        {id:'6',name:'Turn on the backlight',value:'light'},
        {id:'7',name:'Style',value:'style',className:'style'},
];

const initialState = {
        isShown1: false,
        isShown2: false,
        isShown3: false,
        isShown4: false,
        isShown5: false,
        isShown6: false,
        view1: false,
        view2: false,
        view3: false,
        view4: false,
        view5: false,
        view6: false,
        halfHeight1: false,
        halfHeight2: false,
        halfHeight3: false,
        halfHeight4: false,
        halfHeight5: false,
        halfHeight6: false,
        turnOn: false,
        selectChanges:'facade',
        selectColorWallPanel:`${decors[18].color}`,
        selectPatternWallPanel:'',
        selectColorCounterTop:`${decors[17].color}`,
        selectColorFacade:`${decors[22].color}`,
        selectColorTopFacade:`${decors[17].color}`,
        selectStyle: '',
};

export {verticalButtons,decors,patterns,initialState}
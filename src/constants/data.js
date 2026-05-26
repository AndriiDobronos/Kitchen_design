import decor1 from '../static/image-webp/decor1.webp';
import decor2 from '../static/image-webp/decor2.webp';
import decor3 from '../static/image-webp/decor3.webp';
import decor4 from '../static/image-webp/decor4.webp';
import decor5 from '../static/image-webp/decor5.webp';
import decor6 from '../static/image-webp/decor6.webp';
import decor7 from '../static/image-webp/decor7.webp';
import decor8 from '../static/image-webp/decor8.webp';
import decor9 from '../static/image-webp/decor9.webp';
import decor10 from '../static/image-webp/decor10.webp';
import decor11 from '../static/image-webp/decor11.webp';
import decor12 from '../static/image-webp/decor12.webp';
import decor13 from '../static/image-webp/decor13.webp';
import decor14 from '../static/image-webp/decor14.webp';
import decor15 from '../static/image-webp/decor15.webp';
import decor16 from '../static/image-webp/decor16.webp';
import decor17 from '../static/image-webp/decor17.webp';
import decor18 from '../static/image-webp/decor18.webp';
import decor19 from '../static/image-webp/decor19.webp';
import decor20 from '../static/image-webp/decor20.webp';
import decor21 from '../static/image-webp/decor21.webp';
import decor22 from '../static/image-webp/decor22.webp';
import decor23 from '../static/image-webp/decor23.webp';
import decor24 from '../static/image-webp/decor24.webp';
import decor25 from '../static/image-webp/decor25.webp';
import pattern1 from '../static/image-webp/pattern1.png';
import pattern2 from '../static/image-webp/pattern4.png';
import pattern3 from '../static/image-webp/plus.webp';
import pattern4 from '../static/image-webp/bricks.webp';
import pattern5 from '../static/image-webp/pattern2.png';
import pattern6 from '../static/image-webp/pattern3.png';
import pattern7 from '../static/image-webp/pattern5.webp';
import pattern8 from '../static/image-webp/pattern6.webp';

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

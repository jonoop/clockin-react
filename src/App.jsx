import { useState } from "react";
import queryString from "query-string";
import { CopyToClipboard } from "react-copy-to-clipboard";

const datas = [
  {
    router: "bijin",
    title: "比金更宝",
    name: "01绍明02鑫彤03恩霖04蓉蓉06建虾07江男08雪英09新良10朝凯11薛彬12雪婷13银琴14陈锋15薛淋16施晶17华清18超群19海英20雪峰",
    id: 1,
  },
  {
    router: "dianb",
    title: "殿中青榄B",
    name: "01俊彪02敦明03荣忠04科全05躬华06林振07薛淋08江男09陈雄10熊鑫11振文12亮亮13王松14建宁15培成16忠善17晨杭18薛晟19杨帅20德锋21超群22能平",
    id: 2,
  },
  {
    router: "fengxian",
    title: "园中凤仙",
    name: "01刘垚02木发03华清04丽娟05恩赐06陈梅07林婧08立洪09妍玲10桂花11小红12周倩13娟娟14惠娟15航钦16杨珍17陈婷18洛燕19祥增",
    id: 3,
  },
  {
    router: "henga",
    title: "圣言比日恒A",
    name: "01以诺02维佳03余敏04小峰05美琴06丽芳07小明08建英09云英10王丽11明娇12陈英13馨恒14阿弟15甜甜16如意17丽斌18张晓19品琴20晓枫21玉兰22昕婷",
    id: 4,
  },
  {
    router: "hengb",
    title: "圣言比日恒B",
    name: "01俊彪02小强03海荣04建英05许婷06融融07敦明08晓雯09爱英10小惠11王晶12希强13林振14李娟15登龙16仕明17莉莎18何文19小玲20小霞21晨杭22云芳23美君",
    id: 5,
  },
  {
    router: "jiumei1",
    title: "圣言比酒美一组",
    name: "01美蓉02小浓03兰兰04林亮05陈梅06雨虹07佳颖08陈婷09陈坚10华盛11志强12佳丽13道旺",
    id: 6,
  },
  {
    router: "putao",
    title: "园中葡萄",
    name: "01莹莹02华平03琛琤04何娟05俊美06晓枫07双容08义琼09以诺10薛洪11品琴12冬辉13雨燕14王晶15刘逊16俊明17倪帆18倪萍19学文20甜甜21何叶22梅云23平旺24陈波25子若26丹梅27秀凤28碧珍29林勇30丽婷31何枫",
    id: 7,
  },
  {
    router: "qing",
    title: "青草地",
    name: "1旭晖2勃文3凤娥4爱珍5美云6美英7于信8建虾9丽华10向明11积国12林羡临13叶庭14江萍15文宏16丽珍17文娟18阿梅19旺玉20爱云21桂云22梅珍23勃君24辰荣25希莹26燕子27娟英28美芳29月霞30佳丽",
    id: 8,
  },
  {
    router: "xi1",
    title: "溪水旁1",
    name: "01俊彪02美英03云芳04凤琴05登龙06美婷07爱明08绍明09刘垚10莹莹11永康12文友13晓岚14陈梅15谢英16晓静17道旺18希强19晓惠20小琴21美蓉22钦云23海荣24林辉25文宏26慧娟27晓云28美芳29春花30仕明31艳艳32严燕33王松34林娟35小红36志强37华芳38燕芳39郑玲40爱华41薛淋42忠善43晓敏44小峰45雪娥46明婷47平平48宏珠49林振50躬谊51月霞52若飞53惠娟54朝凯55华清56美文57羽慧58惠芸59魏澜60佳俊61晓清62陈雄63雅英64彩霞65力韦66佳颖",
    id: 9,
  },
  {
    router: "xi2",
    title: "溪水旁2",
    name: "01爱珍02丽华03子若04秀珠05陈娟06晓雯07丽斌08国美09桂花10蕊云11叶庭12诵捷13碧珍14品琴15向明16旭晖17余敏18晨杭19爱英20郭青21𣇈霞22圣凯23丽婷24勃文25明云26英珠27小惠28维佳29寒梅30余斌31语奇32秀金33林梅34美琴35美英36秀斌37陈英38岩玲39江萍40丽珍41桂云42蒋妍43梅珍44龙飞45余婷46妹妹47常繁48玉莲49晓红",
    id: 10,
  },
  {
    router: "xi3",
    title: "溪水旁3",
    name: "01俊彪02雅珍03王昕04登龙05勃君06世坤07祈泽08荣忠09裕玲10培成11凤波12俊玲13许婷14恩宝15陈娟16愉芳17莉莎18时明19義臣",
    id: 11,
  },
  {
    router: "xrk",
    title: "向日葵",
    name: "01俊彪02慧娟03谢英04严燕05永康06凤琴07刘垚08华芳09文宏10明婷11美婷12陈雄13莹莹14小红15小琴16燕芳17躬谊18晓岚19雪娥20彩霞21力韦22若飞23惠娟",
    id: 12,
  },
  {
    router: "kzhy",
    title: "空中花园",
    name: "01俊彪02希强03朝凯04绍明05爱明06晓云07美英08晓静09志强10忠善11宏珠12小峰13春花14陈梅15登龙16林辉17黄婧18平平19晓霞20圣凯21晓清22郑玲23雨虹",
    id: 13,
  },
  {
    router: "qcyz",
    title: "青春永驻",
    name: "01俊彪02雅英03钦云04美蓉05玉玲06佳颖07云芳08艳艳09林娟10月霞11海荣12东风13美芳14羽慧15仕明16林振17道旺18薛淋19晓惠20晓敏21美文22惠芸23华清24陈燕",
    id: 14,
  },
  {
    router: "fengxianb",
    title: "园中凤仙B",
    name: "01俊彪02俊玲03莹莹04海燕05芳妹06雅洪07凤琴08岩玲09宏珠10其玉11美燕12珍珍13秋容14桂花15雪娥16云芳17黄婧18春蕊19兰英",
    id: 15,
  },
  {
    router: "yedudun",
    title: "耶杜顿",
    name: "01俊彪02绍明03文友04子静05凤娥06慧娟07永康08江萍09文宏10爱明11叶庭12希强13梅珍14益妹15陈梅16刘垚17国美18小惠19谢英20紫珠21静静22世潭23登龙",
    id: 16,
  },
];
function App() {
  const [dataObj] = datas.filter(
    (data) => data.router === queryString.parse(window.location.search).id
  );
  return (
    <>
      <Bijin title={dataObj.title} name={dataObj.name} />
    </>
  );
}
// function Tag() {
//   const [res, setRes] = useState("");
//   useEffect(() => {
//     fetch(
//       `https://dy.tagsub.net/api/v1/client/subscribe?token=`
//     )
//       .then((res) => res.text())
//       .then((data) => setRes(atob(data)));
//   }, []);
//   return <>{res}</>;
// }

function Bijin({ title, name }) {
  const [textData, setTextData] = useState(name);

  function handleBtn() {
    setTextData(document.getElementById("wenben").value);
  }
  return (
    <div>
      <h3
        style={{
          color: "red",
        }}
      >
        ({title}) 请输入或粘贴：
      </h3>
      <MyTextarea />
      <br />
      <br />
      <GetButton name={name} text={textData} onClick={handleBtn} />
    </div>
  );
}

function MyTextarea() {
  return (
    <textarea
      id="wenben"
      style={{ width: "300px", height: "300px" }}
    ></textarea>
  );
}

function GetButton({ name, text, onClick }) {
  const data = getResult(text, name);
  return (
    <div>
      <button onClick={onClick}>获取结果</button>
      <br />
      <br />
      <a>{data}</a>
      {/* {(document.getElementById("wenben").value = "")} */}
      <br />
      <br />
      <CopyButton text={data} />
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      {copied ? (
        <a style={{ display: "grid", color: "red" }}>已复制!</a>
      ) : (
        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
          <button>复制</button>
        </CopyToClipboard>
      )}
    </div>
  );
}

function getResult(putText, str) {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    const pattern = new RegExp("[0-9]+");
    if (pattern.test(arr[i])) {
      const newarr = arr[i].replace(arr[i], ",");
      arr.splice(i, 1, newarr);
    }
    //console.log(arr[i]);
  }
  let strnew = "";
  for (let i = 0; i < arr.length; i++) {
    strnew = strnew.concat(arr[i]);
  }
  //console.log(strnew);
  const arr1 = strnew.split(",,");
  arr1.splice(0, 1);
  //console.log(arr1);
  let data = "";
  for (var i = 0; i < arr1.length; i++) {
    var float = putText.includes(arr1[i]);
    //console.log(float);
    if (float == false) {
      data = data.concat(" @", arr1[i]);
    }
  }

  return data;
}

export default App;

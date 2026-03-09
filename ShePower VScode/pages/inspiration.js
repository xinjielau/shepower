import { useState } from "react";
import Layout from "../components/Layout";

const messages = [
"今天的你，比昨天更勇敢。",
"慢慢走，也是在前进。",
"你拥有改变未来的能力。",
"每一次坚持都会累积力量。",
"你值得被世界温柔对待。",
"相信自己，你正在成长。",
"今天也请为自己骄傲。",
"你的光芒正在被看见。",
"所有努力都会开花。",
"未来正在为你展开。"
];

export default function InspirationPage() {

const [showCard, setShowCard] = useState(false);
const [text, setText] = useState("");

const getInspiration = () => {


const random = messages[Math.floor(Math.random() * messages.length)];

setText(random);
setShowCard(true);


};

const closeCard = () => {
setShowCard(false);
};

return (


<Layout title="Daily Inspiration">

  <section className="section-wrap py-24 text-center">

    <h1 className="text-5xl font-semibold text-stone-900">
      Daily Inspiration
    </h1>

    <p className="mt-4 text-lg text-stone-600">
      有时候，一句话就能给我们一点力量。
    </p>

    <p className="mt-2 text-stone-500">
      点击按钮领取今天属于你的激励。
    </p>

    {/* 按钮 */}

    {!showCard && (

      <button
        onClick={getInspiration}
        className="mt-10 rounded-full bg-rose-500 px-8 py-3 text-white font-semibold hover:bg-rose-600 transition"
      >
        领取今日激励
      </button>

    )}

    {/* 卡片 */}

    {showCard && (

      <div className="mt-14 flex flex-col items-center">

        <div className="max-w-xl rounded-3xl bg-white shadow-2xl p-10 text-xl text-stone-700 leading-relaxed">

          🌸 {text}

        </div>

        <button
          onClick={closeCard}
          className="mt-8 rounded-full border border-rose-300 px-6 py-2 text-rose-600 hover:bg-rose-50 transition"
        >
          收回卡片
        </button>

      </div>

    )}

  </section>

</Layout>


);

}



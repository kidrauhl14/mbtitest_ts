import { IResult } from "./types"
import Abyssinian from '../../assets/cat/Abyssinian.jpg';
import Ameshort from '../../assets/cat/Ameshort.jpg';
import Bengal from '../../assets/cat/Bengal.jpg';
import British from '../../assets/cat/British.jpg';
import Exotic from '../../assets/cat/Exotic.jpg';
import Korshort from '../../assets/cat/Korshort.jpg';
import Mainecoon from '../../assets/cat/Mainecoon.jpg';
import Munchkin from '../../assets/cat/Munchkin.jpg';
import Norwegianforest from '../../assets/cat/Norwegianforest.jpg';
import Persian from '../../assets/cat/Persian.jpg';
import Ragdoll from '../../assets/cat/Ragdoll.jpg';
import Russianblue from '../../assets/cat/Russianblue.jpg';
import Scottishfold from '../../assets/cat/Scottishfold.jpg';
import Siamese from '../../assets/cat/Siamese.jpg';
import Sphinx from '../../assets/cat/Sphinx.jpg';
import Turkishangora from '../../assets/cat/Turkishangora.jpg';

export const ResultData: IResult = [
  {
    id: 1,
    name: '러시안 블루',
    best: 'ESTJ',
    description:
      '겁이 많아요.워낙 온순한 성격에 조용한 고양이라 소심하게 느껴집니다! 낯을 심하게 가리는 편이구요.혼자 놔두면 호기심이 많아서 이것저것 치고 건드리고 즐겁게 보내는 고양이입니다.초보 애묘가가 키우기 좋은 묘종입니다.',
    image: `${Russianblue}`,
    mbti: 'ISFJ',
  },
  {
    id: 2,
    name: '샴',
    best: 'ESFP',
    description:
      '대체적으로 온순하고 느긋한 성격이에요.외로움을 잘타며 질투심이 강해요.수다스러운 성격입니다.독립심이 강한 편에 속하지만 특이하게도 사람 손 타는 걸 좋아하는 고양이 입니다.',
    image: `${Siamese}`,
  },
  {
    id: 3,
    name: '페르시안',
    best: 'ENTJ',
    description:
      '조용하고 성격도 순한편이서 개냥이가 되는 경우가 많습니다. 장모종이어서 털이 굉장히 부드러워요.아이와 함께 키워도 좋을 만큼 굉장히 순하고 독립심이 강한 고양이 입니다.',
    image: `${Persian}`,
    mbti: 'INFP',
  },
  {
    id: 4,
    name: '뱅갈',
    best: 'INTP',
    description:
      '활동력이 어마어마한 고양이에요! 그렇기 때문에 살이 잘 안찌는 고양이 중에 하나입니다!집사분이 놀아주다가 탈진할 수도!',
    image: `${Bengal}`,
    mbti: 'ESTP',
  },
  {
    id: 5,
    name: '터키쉬 앙고라',
    best: 'INTJ',
    description:
      '우아한 장모종 고양이! 그러다보니 까칠하고 성질이 조금 급해요! 잔머리가 많고 복수심도 많은 고양이! 하지만 고양이마다 성격은 다 다르니 참고하세요!',
    image: `${Turkishangora}`,
    mbti: 'ENFJ',
  },
  {
    id: 6,
    name: '아비시니안',
    best: 'ISTJ',
    description:
      '민첩하고 호기심 많고 똑똑한 고양이입니다! 굉장히 수다쟁이여서 집사가 부르면 야옹하고 대답도 잘하는 고양이에요! 물을 굉장히 좋아해서 목욕을 시킬 때, 굉장히 편한 고양이 중 하나! 다만 호기심이 많아서 이것저것 잘 떨구는 고양이!',
    image: `${Abyssinian}`,
    mbti: 'ESFJ',
  },
  {
    id: 7,
    name: '노르웨이 숲',
    best: 'ESTP',
    description:
      '조용하고 사람을 매우 좋아하는 고양이 중 하나! 숲에서 살던 고양이라 본능적으로 사냥 놀이를 굉장히 좋아해요. 대형종 고양이라 식욕이 많아요',
    image: `${Norwegianforest}`,
    mbti: 'INTP',
  },
  {
    id: 8,
    name: '아메리칸 숏헤어',
    best: 'INFP',
    description:
      '주인에 대한 호기심이 높고 애교가 굉장히 많아요!다만! 집사 내꺼야! 독점욕도 굉장히 강합니다. 이미 여러마리의 고양이를 키우는 집사라면 다른 고양이들에게 하악질을 볼 수도..',
    image: `${Ameshort}`,
    mbti: 'ESFP',
  },
  {
    id: 9,
    name: '코리안 숏헤어',
    best: 'ISFP',
    description:
      '많은 고양이의 혈통이 섞여있는 고양이에요! 대부분 활발하고 쾌할한 성격을 가지고 있고, 친밀하고 영리합니다! 사냥본능이 매우 뛰어나서 사냥놀이를 굉장히 좋아해요',
    image: `${Korshort}`,
    mbti: 'ENFP',
  },
  {
    id: 10,
    name: '엑죠틱',
    best: 'ISFJ',
    description:
      '낯을 가리지 않고, 주인 옆에서 느긋하게 일상을 즐기는 고양이에요! 다만 운동량이 그렇게 많지 않아 뚱뚱 고양이가 될 수 있으니 조심하기!',
    image: `${Exotic}`,
    mbti: 'ESTJ',
  },
  {
    id: 11,
    name: '스코티쉬 폴드',
    best: 'ENFP',
    description:
      '접힌 귀가 굉장히 귀여운 고양이! 착하고 느긋하며 울음소리가 작은 고양이! 고양이 치고는 애교가 매우 많은 편이며 귀찮을 정도로 집사를 졸졸졸 따라다니는 경우가 있습니다!',
    image: `${Scottishfold}`,
    mbti: 'ISFP',
  },
  {
    id: 12,
    name: '먼치킨',
    best: 'INFJ',
    description:
      '짧은 다리와 귀염한 외모를 가지고 있는 고양이에요! 호기심이 매우 많아서 짧은 다리로 이곳저곳을 돌아다니는 에너지가 넘치는 고양이! 영리하고 애교가 많은 편에 속하는 고양이에요',
    image: `${Munchkin}`,
    mbti: 'ENTJ',
  },
  {
    id: 13,
    name: '렉돌',
    best: 'ESFJ',
    description:
      '긴 털과 아주 예쁜 예모로 많이 사랑받는 고양이! 봉제인형이라는 이름처럼 집사가 안으면 인형처럼 안겨있는 고양이입니다! 너무나도 순하고 집사와의 교감을 매우 좋아하는 고양이 중에 하나입니다!',
    image: `${Ragdoll}`,
    mbti: 'ISTJ',
  },
  {
    id: 14,
    name: '브리티쉬 숏헤어',
    best: 'ENTP',
    description:
      '이름과 같이 영국 신사와 같은 고양이! 배려심이 깊고 매우 조용하고 인내심이 강한 고양이에요. 덩치가 큰 편이어서 집사 무릎보다는 옆구리에 앉아서 시간을 보내는 것을 좋아하는 고양이입니다!',
    image: `${British}`,
    mbti: 'ISTP',
  },
  {
    id: 15,
    name: '스핑크스',
    best: 'ISTP',
    description:
      '유일하게 털이 없는 고양이입니다! 외모와는 다르게 고양이 중에서 가장 성격이 좋다고 하는 고양이계의 골든리트리버! 다만 피부병이 잘 걸릴 수 있으니 조심조심!',
    image: `${Sphinx}`,
    mbti: 'ENTP',
  },
  {
    id: 16,
    name: '메인쿤',
    best: 'ENFJ',
    description:
      '거인 신사라는 별명을 가진 고양이에요! 조용하고 온화한 성격을 가지고 있으며 매우 똑똑하고 크기와 생김새가 사자나 호랑이처럼 생긴 고양이 입니다!',
    image: `${Mainecoon}`,
    mbti: 'INTJ',
  },
];
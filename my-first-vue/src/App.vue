<script setup>
const { log } = console;
import { ref, computed } from "vue";
import catObjs from "./catData";
// SFCにおける<style></style>はあえて使用せず、main.js経由で読み込みしているstyle.cssに各種スタイルを集約する
/**
 * メインコンテンツ側
 */
// 1、catデータをcatData.jsよりインポートし、変数:catContentsに代入
const catContents = ref(catObjs);
// 2、データの有無をチェックし、変数:isItemsにその結果を代入
const isItems = ref(0);
// 算出プロパティの参照(コンポーネントの中で計算処理を記載するのではなく、scriptタグ内で事前に処理を済ませる)
isItems.value = catContents.value.length;
log(catContents.value);
// 3、変数:isItemsの値がTruthyであればv-forによるループ出力を実行、そうでなければ実行しない
// 各カードアイテムの画像パス
// vite使用環境でパス指定する際に使用する
const getImageUrl = (fileName) => {
  return new URL(`/src/assets/images/${fileName}.webp`, import.meta.url).href;
};
// (ここまでが初回アクセス時の流れ)
// 4、ユーザーが特定のタグを押下、クリックイベントにあわせてタグ情報を取得
const tagFilter = (e) => {
  const result = [];
  // log("★", catContents.value);
  e.preventDefault();
  const selectedTag = e.target.getAttribute("data-tag");
  for (const [key, value] of Object.entries(catObjs)) {
    if (selectedTag === value.tagState) {
      result.push(value);
    } else if (selectedTag === value.tagCatType) {
      result.push(value);
    } else if (selectedTag === "all") {
      result.push(value);
    }
  }
  catContents.value = result;
  // log("result", result);
};
/**
 * サイドバー側のタグを重複削除した上で出力させる
 */
let catTags01 = [];
let catTags02 = [];
for (const [key, value] of Object.entries(catObjs)) {
  // console.log(`${key}: ${value.tag}`);
  catTags01.push(value.tagState);
  catTags02.push(value.tagCatType);
}
catTags01 = catTags01.filter((element, idx) => {
  return catTags01.indexOf(element) === idx;
});
catTags02 = catTags02.filter((element, idx) => {
  return catTags02.indexOf(element) === idx;
});
log(catTags01);
log(catTags02);

/**
 * モーダルウインドウ
 */
const modalOpen = ref(false);
const modalImgPath = ref(null);
const modalTitle = ref(null);
const handleOpenModal = (modalInfo) => {
  modalImgPath.value = new URL(
    `/src/assets/images/${modalInfo.fileName}.webp`,
    import.meta.url
  ).href;
  modalTitle.value = modalInfo.title;
  modalOpen.value = true;
};
const handleCloseModal = () => {
  modalOpen.value = false;
};
</script>

<template>
  <div class="contents">
    <div class="side-wrapper">
      <div class="side-wrapper__inner">
        <p class="side__head">🐈タグ</p>
        <div class="tag-list-wrapper">
          <p class="side__head">様子</p>
          <ul v-if="isItems" class="tag-list">
            <li class="tag-list__item">
              <a
                class="tag-list__tag"
                href="/"
                :data-tag="'all'"
                @click="tagFilter"
                >すべて</a
              >
            </li>
            <li
              v-for="(item, key) in catTags01"
              :key="key"
              class="tag-list__item"
            >
              <a
                class="tag-list__tag"
                href="#"
                :data-tag="item"
                @click="tagFilter"
                >{{ item }}</a
              >
            </li>
          </ul>
          <p class="side__head">種類</p>
          <ul v-if="isItems" class="tag-list">
            <li class="tag-list__item">
              <a
                class="tag-list__tag"
                href="/"
                :data-tag="'all'"
                @click="tagFilter"
                >すべて</a
              >
            </li>
            <li
              v-for="(item, key) in catTags02"
              :key="key"
              class="tag-list__item"
            >
              <a
                class="tag-list__tag"
                href="#"
                :data-tag="item"
                @click="tagFilter"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ===== 暫定設置 画像クリック後のモーダル要素 ここから ===== -->
    <Teleport to="body">
      <Transition name="modal">
        <div class="modal" v-if="modalOpen">
          <div class="modal-contents">
            <div class="modal__close-wrapper">
              <button class="modal__close" @click="handleCloseModal">×</button>
            </div>
            <p class="modal-contents__title">{{ modalTitle }}</p>
            <div class="modal-contents__img-wrapper">
              <img class="modal-contents__img" :src="modalImgPath" alt="" />
            </div>
          </div>
          <div class="modal-bg" @click="handleCloseModal"></div>
        </div>
      </Transition>
    </Teleport>
    <!-- ===== 暫定設置 画像クリック後のモーダル要素 ここまで ===== -->
    <div class="main-wrapper">
      <div class="main-wrapper__inner">
        <!-- コンポーネント化候補 -->
        <div class="list-wrapper">
          <Transition name="mediaList">
            <ul v-if="isItems" class="list">
              <li
                v-for="(item, key) in catContents"
                :key="key"
                class="list__item"
              >
                <p class="list__item-head">
                  {{ item.title }}
                </p>
                <div class="list__item-image-wrapper">
                  <img
                    :src="getImageUrl(item.fileName)"
                    class="list__item-image"
                    alt=""
                    @click="handleOpenModal(item)"
                  />
                </div>
                <div class="list__item-tags">
                  <span class="tag-label">様子:</span>
                  <div class="tag-wrapper">
                    <a
                      class="tag"
                      href="#"
                      :data-tag="item.tagState"
                      @click="tagFilter"
                      >{{ item.tagState }}</a
                    >
                  </div>
                </div>
                <div class="list__item-tags">
                  <span class="tag-label">種類:</span>
                  <div class="tag-wrapper">
                    <a
                      class="tag"
                      href="#"
                      :data-tag="item.tagCatType"
                      @click="tagFilter"
                      >{{ item.tagCatType }}</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </Transition>
        </div>
      </div>
    </div>
  </div>
  <!-- contents -->
</template>

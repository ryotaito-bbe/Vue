import { catObj } from "../catData";
import { catObjRef } from "../catData";

export const tagFilter = (e) => {
  console.log("タグフィルタ呼ばれた")
  const result = [];
  e.preventDefault();
  const selectedTag = e.target.getAttribute("data-tag");
  console.log("selectedTag",selectedTag)

  for (const value of Object.values(catObj)) {
    if (selectedTag === value.tagState) {
      result.push(value);
    } else if (selectedTag === value.tagCatType) {
      result.push(value);
    } else if (selectedTag === "all") {
      result.push(value);
    }
  }
  catObjRef.value = result;
  console.log(catObjRef.value);
};
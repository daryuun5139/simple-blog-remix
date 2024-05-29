// 全角を半角に変換
export function hankakuConvert(str: string | null) {
  if (!str) {
    return null;
  } else {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  }
}

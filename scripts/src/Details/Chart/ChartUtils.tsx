var VIS_COLORS = ["#111EC6", "#6495ED", "#004D92", "3FE0D0", "95C8D8", "008081", "4C516D", "#4F97A3", "1034A6", "008ECC"];

var lengthenColors = (colorArray, desiredLength) => {
    while(desiredLength > colorArray.length) {
      let extraLength = desiredLength - colorArray.length;
      if (extraLength <= colorArray.length) {
        colorArray = colorArray.concat(colorArray.slice(0,extraLength));
      } else {
        colorArray = colorArray.concat(colorArray);
      }
    }
    return colorArray;
}

module.exports = {
    VIS_COLORS,
    lengthenColors
};
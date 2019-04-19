import {keys, union, toSafeInteger} from "lodash-es";


const reviewTimeBins = {
    "<30 days": 0,
    "30 - 90 days": 0,
    "90 days - 6 mo": 0,
    "6 mo - 1 yr": 0,
    "1 - 2 yr": 0,
    ">3 yr": 0
};

var binReviewTimes = reviewTimeCount => {
    for (var key in reviewTimeCount) {
      let intValue = parseInt(key);
      if (intValue < 30) {
        reviewTimeBins["<30 days"] += reviewTimeCount[key];
      } else if (intValue < 90) {
        reviewTimeBins["30 - 90 days"] += reviewTimeCount[key];
      } else if (intValue < 186) {
        reviewTimeBins["90 days - 6 mo"] += reviewTimeCount[key];
      } else if (intValue < 365) {
        reviewTimeBins["6 mo - 1 yr"] += reviewTimeCount[key];
      } else if (intValue < 730) {
        reviewTimeBins["1 - 2 yr"] += reviewTimeCount[key];
      } else {
        reviewTimeBins[">3 yr"] += reviewTimeCount[key];
      }
    }
    return reviewTimeBins
}

var binDeviceClasses = deviceClassCounts => {
    var deviceClassBins = {
      "Class I": 0,
      "Class II": 0,
      "Class III": 0,
      "Other": 0
    }
    for (var key in deviceClassCounts) {
      switch (key) {
        case "1":
          deviceClassBins["Class I"] = deviceClassCounts[key];
          break;
        case "2":
          deviceClassBins["Class II"] = deviceClassCounts[key];
          break;
        case "3":
          deviceClassBins["Class III"] = deviceClassCounts[key];
          break;
        default: 
          deviceClassBins["Other"] += deviceClassCounts[key];
      }
    }
    return deviceClassBins;
}

var mergeGroupedValues = (g1, g2) => {
    const merged_keys = union(keys(g1), keys(g2));
    const merged = {};
    merged_keys.forEach(key => merged[key] = toSafeInteger(g1[key]) + toSafeInteger(g2[key]));
    return merged;
}

var splitDoubleKeys = (doubleKeyDict, split) => {
    /*
        Required doubleKeyDict format:
            {
                'key1|key2': count,
                'key1|key2': count
            }
        results format:
            {
                'key1': {'key2': count, 'key2': count}
                'key1': {'key2': count, 'key2': count}
            }
    */
    var results = {};
    for (var key in doubleKeyDict) {
        let splitKeys = key.split(split);
        let key1 = splitKeys[0];
        let key2 = splitKeys[1];
        if (key1 in results) {
            results[key1][key2] = doubleKeyDict[key];
        } else {
            results[key1] = {};
            results[key1][key2] = doubleKeyDict[key];
        }
    }
    return results;
}

module.exports = {
    reviewTimeBins,
    binReviewTimes,
    binDeviceClasses,
    mergeGroupedValues,
    splitDoubleKeys
};
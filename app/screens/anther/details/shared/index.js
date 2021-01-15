import React from "react";
import { cssVariables, moderateScale } from "../../../../../config";
import Progressbar from "../../../../shared/AppProgressbar";

function updateProgress(detailsContext, num) {
  const tmp = { ...detailsContext.details };
  tmp.progress.current += num;
  detailsContext.setDetails(tmp);
}

function DetailsProgressbar(detailsContext) {
  return (
    <Progressbar
      borderColor={cssVariables.colors.white}
      color={cssVariables.colors.primary}
      width={moderateScale(200)}
      height={moderateScale(4)}
      progress={
        detailsContext.details.progress.current /
        detailsContext.details.progress.max
      }
      style={{ marginTop: moderateScale(55) }}
    />
  );
}

export { updateProgress, DetailsProgressbar };

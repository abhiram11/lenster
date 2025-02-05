import { t } from '@lingui/macro';
import { CollectModules, FollowModules, ReferenceModules } from 'lens';

/**
 *
 * @param name - Module to format
 * @returns module config
 */
export const getModule = (
  name: string
): {
  name: string;
  field: string;
} => {
  switch (name) {
    // Collect Modules
    case CollectModules.UnknownCollectModule:
      return { name: t`Unknown Collect`, field: 'collectModule' };
    case CollectModules.FeeCollectModule:
      return { name: t`Paid Collect`, field: 'collectModule' };
    case CollectModules.LimitedFeeCollectModule:
      return { name: t`Rare Paid Collect`, field: 'collectModule' };
    case CollectModules.TimedFeeCollectModule:
      return { name: t`24 Hour Collect`, field: 'collectModule' };
    case CollectModules.LimitedTimedFeeCollectModule:
      return { name: t`Rare 24 Hour Collect`, field: 'collectModule' };
    case CollectModules.FreeCollectModule:
      return { name: t`Free Collect`, field: 'collectModule' };
    case CollectModules.RevertCollectModule:
      return { name: t`No Collect`, field: 'collectModule' };

    // Follow modules
    case FollowModules.FeeFollowModule:
      return { name: t`Fee Follow`, field: 'followModule' };

    // Reference modules
    case ReferenceModules.FollowerOnlyReferenceModule:
      return { name: t`Follower Only Reference`, field: 'referenceModule' };
    default:
      return { name: name, field: 'collectModule' };
  }
};

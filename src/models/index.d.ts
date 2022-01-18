import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Player {
  readonly id: string;
  readonly name?: string;
  readonly sport?: string;
  readonly dob?: string;
  readonly activeFrom?: string;
  readonly activeTo?: string;
  readonly profilePic?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}
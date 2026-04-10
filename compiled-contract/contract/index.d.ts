import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<PS> = {
}

export type ImpureCircuits<PS> = {
  initialize(context: __compactRuntime.CircuitContext<PS>,
             initial_root_0: bigint,
             admin_pk_0: bigint,
             act_val_0: bigint,
             vouch_val_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  proposeSurvey(context: __compactRuntime.CircuitContext<PS>,
                proposal_id_0: bigint,
                title_0: string,
                content_0: string,
                secret_key_0: Uint8Array,
                member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  upvoteProposal(context: __compactRuntime.CircuitContext<PS>,
                 proposal_id_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  vouchForMember(context: __compactRuntime.CircuitContext<PS>,
                 candidate_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  submitResponse(context: __compactRuntime.CircuitContext<PS>,
                 survey_id_0: bigint,
                 choice_index_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
}

export type ProvableCircuits<PS> = {
  initialize(context: __compactRuntime.CircuitContext<PS>,
             initial_root_0: bigint,
             admin_pk_0: bigint,
             act_val_0: bigint,
             vouch_val_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  proposeSurvey(context: __compactRuntime.CircuitContext<PS>,
                proposal_id_0: bigint,
                title_0: string,
                content_0: string,
                secret_key_0: Uint8Array,
                member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  upvoteProposal(context: __compactRuntime.CircuitContext<PS>,
                 proposal_id_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  vouchForMember(context: __compactRuntime.CircuitContext<PS>,
                 candidate_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  submitResponse(context: __compactRuntime.CircuitContext<PS>,
                 survey_id_0: bigint,
                 choice_index_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
}

export type PureCircuits = {
}

export type Circuits<PS> = {
  initialize(context: __compactRuntime.CircuitContext<PS>,
             initial_root_0: bigint,
             admin_pk_0: bigint,
             act_val_0: bigint,
             vouch_val_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  proposeSurvey(context: __compactRuntime.CircuitContext<PS>,
                proposal_id_0: bigint,
                title_0: string,
                content_0: string,
                secret_key_0: Uint8Array,
                member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  upvoteProposal(context: __compactRuntime.CircuitContext<PS>,
                 proposal_id_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  vouchForMember(context: __compactRuntime.CircuitContext<PS>,
                 candidate_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  submitResponse(context: __compactRuntime.CircuitContext<PS>,
                 survey_id_0: bigint,
                 choice_index_0: bigint,
                 secret_key_0: Uint8Array,
                 member_id_0: bigint): __compactRuntime.CircuitResults<PS, []>;
}

export type Ledger = {
  readonly member_tree_root: bigint;
  readonly activation_threshold: bigint;
  readonly vouch_threshold: bigint;
  vouched_members: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): bigint;
    [Symbol.iterator](): Iterator<[bigint, bigint]>
  };
  readonly administrator: bigint;
  survey_results: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): {
      isEmpty(): boolean;
      size(): bigint;
      member(key_1: bigint): boolean;
      lookup(key_1: bigint): bigint;
      [Symbol.iterator](): Iterator<[bigint, bigint]>
    }
  };
  nullifiers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): {
      isEmpty(): boolean;
      size(): bigint;
      member(elem_0: bigint): boolean;
      [Symbol.iterator](): Iterator<bigint>
    }
  };
  proposals: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { id: bigint,
                             title: string,
                             content: string,
                             proposer_nullifier: bigint,
                             upvotes: bigint,
                             status: number
                           };
    [Symbol.iterator](): Iterator<[bigint, { id: bigint,
  title: string,
  content: string,
  proposer_nullifier: bigint,
  upvotes: bigint,
  status: number
}]>
  };
  upvote_nullifiers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): {
      isEmpty(): boolean;
      size(): bigint;
      member(key_1: bigint): boolean;
      lookup(key_1: bigint): bigint;
      [Symbol.iterator](): Iterator<[bigint, bigint]>
    }
  };
  vouch_requests: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { candidate: bigint,
                             vouch_count: bigint,
                             is_completed: bigint
                           };
    [Symbol.iterator](): Iterator<[bigint, { candidate: bigint, vouch_count: bigint, is_completed: bigint }]>
  };
  candidate_vouches: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): {
      isEmpty(): boolean;
      size(): bigint;
      member(key_1: bigint): boolean;
      lookup(key_1: bigint): bigint;
      [Symbol.iterator](): Iterator<[bigint, bigint]>
    }
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;

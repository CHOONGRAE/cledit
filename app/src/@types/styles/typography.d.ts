declare const knownTypograpyGroupNames = [
  'headline',
  'subtitle',
  'body',
] as const;

type KnownTypoGroup = (typeof knownTypograpyGroupNames)[number];

type MakeTypoTokenSet<
  TGroup extends KnownTypoGroup,
  TSize extends Array<number>,
> = `${TGroup}${TSize[number]}`;

declare type TypoToken =
  | MakeTypoTokenSet<'headline', [1]>
  | MakeTypoTokenSet<'subtitle', [1]>
  | MakeTypoTokenSet<'body', [1]>;

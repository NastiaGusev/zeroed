import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GroupModel = runtime.Types.Result.DefaultSelection<Prisma.$GroupPayload>;
export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null;
    _avg: GroupAvgAggregateOutputType | null;
    _sum: GroupSumAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
};
export type GroupAvgAggregateOutputType = {
    id: number | null;
    ownerId: number | null;
};
export type GroupSumAggregateOutputType = {
    id: number | null;
    ownerId: number | null;
};
export type GroupMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
    ownerId: number | null;
};
export type GroupMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
    ownerId: number | null;
};
export type GroupCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    ownerId: number;
    _all: number;
};
export type GroupAvgAggregateInputType = {
    id?: true;
    ownerId?: true;
};
export type GroupSumAggregateInputType = {
    id?: true;
    ownerId?: true;
};
export type GroupMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    ownerId?: true;
};
export type GroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    ownerId?: true;
};
export type GroupCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    ownerId?: true;
    _all?: true;
};
export type GroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GroupCountAggregateInputType;
    _avg?: GroupAvgAggregateInputType;
    _sum?: GroupSumAggregateInputType;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
};
export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGroup[P]> : Prisma.GetScalarType<T[P], AggregateGroup[P]>;
};
export type GroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithAggregationInput | Prisma.GroupOrderByWithAggregationInput[];
    by: Prisma.GroupScalarFieldEnum[] | Prisma.GroupScalarFieldEnum;
    having?: Prisma.GroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupCountAggregateInputType | true;
    _avg?: GroupAvgAggregateInputType;
    _sum?: GroupSumAggregateInputType;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
};
export type GroupGroupByOutputType = {
    id: number;
    name: string;
    createdAt: Date;
    ownerId: number;
    _count: GroupCountAggregateOutputType | null;
    _avg: GroupAvgAggregateOutputType | null;
    _sum: GroupSumAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
};
export type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GroupGroupByOutputType[P]>;
}>>;
export type GroupWhereInput = {
    AND?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    OR?: Prisma.GroupWhereInput[];
    NOT?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    id?: Prisma.IntFilter<"Group"> | number;
    name?: Prisma.StringFilter<"Group"> | string;
    createdAt?: Prisma.DateTimeFilter<"Group"> | Date | string;
    ownerId?: Prisma.IntFilter<"Group"> | number;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    members?: Prisma.GroupMemberListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    settlements?: Prisma.SettlementListRelationFilter;
};
export type GroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    members?: Prisma.GroupMemberOrderByRelationAggregateInput;
    expenses?: Prisma.ExpenseOrderByRelationAggregateInput;
    settlements?: Prisma.SettlementOrderByRelationAggregateInput;
};
export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    OR?: Prisma.GroupWhereInput[];
    NOT?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    name?: Prisma.StringFilter<"Group"> | string;
    createdAt?: Prisma.DateTimeFilter<"Group"> | Date | string;
    ownerId?: Prisma.IntFilter<"Group"> | number;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    members?: Prisma.GroupMemberListRelationFilter;
    expenses?: Prisma.ExpenseListRelationFilter;
    settlements?: Prisma.SettlementListRelationFilter;
}, "id">;
export type GroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    _count?: Prisma.GroupCountOrderByAggregateInput;
    _avg?: Prisma.GroupAvgOrderByAggregateInput;
    _max?: Prisma.GroupMaxOrderByAggregateInput;
    _min?: Prisma.GroupMinOrderByAggregateInput;
    _sum?: Prisma.GroupSumOrderByAggregateInput;
};
export type GroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.GroupScalarWhereWithAggregatesInput | Prisma.GroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.GroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GroupScalarWhereWithAggregatesInput | Prisma.GroupScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Group"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Group"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Group"> | Date | string;
    ownerId?: Prisma.IntWithAggregatesFilter<"Group"> | number;
};
export type GroupCreateInput = {
    name: string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutOwnedGroupsInput;
    members?: Prisma.GroupMemberCreateNestedManyWithoutGroupInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    ownerId: number;
    members?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutGroupInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOwnedGroupsNestedInput;
    members?: Prisma.GroupMemberUpdateManyWithoutGroupNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.IntFieldUpdateOperationsInput | number;
    members?: Prisma.GroupMemberUncheckedUpdateManyWithoutGroupNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupCreateManyInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    ownerId: number;
};
export type GroupUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GroupListRelationFilter = {
    every?: Prisma.GroupWhereInput;
    some?: Prisma.GroupWhereInput;
    none?: Prisma.GroupWhereInput;
};
export type GroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type GroupAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type GroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type GroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type GroupSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
};
export type GroupScalarRelationFilter = {
    is?: Prisma.GroupWhereInput;
    isNot?: Prisma.GroupWhereInput;
};
export type GroupCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutOwnerInput, Prisma.GroupUncheckedCreateWithoutOwnerInput> | Prisma.GroupCreateWithoutOwnerInput[] | Prisma.GroupUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutOwnerInput | Prisma.GroupCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.GroupCreateManyOwnerInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutOwnerInput, Prisma.GroupUncheckedCreateWithoutOwnerInput> | Prisma.GroupCreateWithoutOwnerInput[] | Prisma.GroupUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutOwnerInput | Prisma.GroupCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.GroupCreateManyOwnerInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutOwnerInput, Prisma.GroupUncheckedCreateWithoutOwnerInput> | Prisma.GroupCreateWithoutOwnerInput[] | Prisma.GroupUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutOwnerInput | Prisma.GroupCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutOwnerInput | Prisma.GroupUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.GroupCreateManyOwnerInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutOwnerInput | Prisma.GroupUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutOwnerInput | Prisma.GroupUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutOwnerInput, Prisma.GroupUncheckedCreateWithoutOwnerInput> | Prisma.GroupCreateWithoutOwnerInput[] | Prisma.GroupUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutOwnerInput | Prisma.GroupCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutOwnerInput | Prisma.GroupUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.GroupCreateManyOwnerInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutOwnerInput | Prisma.GroupUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutOwnerInput | Prisma.GroupUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutMembersInput, Prisma.GroupUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutMembersInput;
    connect?: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutMembersInput, Prisma.GroupUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.GroupUpsertWithoutMembersInput;
    connect?: Prisma.GroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupUpdateToOneWithWhereWithoutMembersInput, Prisma.GroupUpdateWithoutMembersInput>, Prisma.GroupUncheckedUpdateWithoutMembersInput>;
};
export type GroupCreateNestedOneWithoutExpensesInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutExpensesInput, Prisma.GroupUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutExpensesInput;
    connect?: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutExpensesInput, Prisma.GroupUncheckedCreateWithoutExpensesInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutExpensesInput;
    upsert?: Prisma.GroupUpsertWithoutExpensesInput;
    connect?: Prisma.GroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupUpdateToOneWithWhereWithoutExpensesInput, Prisma.GroupUpdateWithoutExpensesInput>, Prisma.GroupUncheckedUpdateWithoutExpensesInput>;
};
export type GroupCreateNestedOneWithoutSettlementsInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutSettlementsInput, Prisma.GroupUncheckedCreateWithoutSettlementsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutSettlementsInput;
    connect?: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateOneRequiredWithoutSettlementsNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutSettlementsInput, Prisma.GroupUncheckedCreateWithoutSettlementsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutSettlementsInput;
    upsert?: Prisma.GroupUpsertWithoutSettlementsInput;
    connect?: Prisma.GroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupUpdateToOneWithWhereWithoutSettlementsInput, Prisma.GroupUpdateWithoutSettlementsInput>, Prisma.GroupUncheckedUpdateWithoutSettlementsInput>;
};
export type GroupCreateWithoutOwnerInput = {
    name: string;
    createdAt?: Date | string;
    members?: Prisma.GroupMemberCreateNestedManyWithoutGroupInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutOwnerInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    members?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutGroupInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutOwnerInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutOwnerInput, Prisma.GroupUncheckedCreateWithoutOwnerInput>;
};
export type GroupCreateManyOwnerInputEnvelope = {
    data: Prisma.GroupCreateManyOwnerInput | Prisma.GroupCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type GroupUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.GroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupUpdateWithoutOwnerInput, Prisma.GroupUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutOwnerInput, Prisma.GroupUncheckedCreateWithoutOwnerInput>;
};
export type GroupUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutOwnerInput, Prisma.GroupUncheckedUpdateWithoutOwnerInput>;
};
export type GroupUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.GroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyWithoutOwnerInput>;
};
export type GroupScalarWhereInput = {
    AND?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
    OR?: Prisma.GroupScalarWhereInput[];
    NOT?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
    id?: Prisma.IntFilter<"Group"> | number;
    name?: Prisma.StringFilter<"Group"> | string;
    createdAt?: Prisma.DateTimeFilter<"Group"> | Date | string;
    ownerId?: Prisma.IntFilter<"Group"> | number;
};
export type GroupCreateWithoutMembersInput = {
    name: string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutOwnedGroupsInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutMembersInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    ownerId: number;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutMembersInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutMembersInput, Prisma.GroupUncheckedCreateWithoutMembersInput>;
};
export type GroupUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.GroupUpdateWithoutMembersInput, Prisma.GroupUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutMembersInput, Prisma.GroupUncheckedCreateWithoutMembersInput>;
    where?: Prisma.GroupWhereInput;
};
export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.GroupWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutMembersInput, Prisma.GroupUncheckedUpdateWithoutMembersInput>;
};
export type GroupUpdateWithoutMembersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOwnedGroupsNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.IntFieldUpdateOperationsInput | number;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupCreateWithoutExpensesInput = {
    name: string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutOwnedGroupsInput;
    members?: Prisma.GroupMemberCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutExpensesInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    ownerId: number;
    members?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutGroupInput;
    settlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutExpensesInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutExpensesInput, Prisma.GroupUncheckedCreateWithoutExpensesInput>;
};
export type GroupUpsertWithoutExpensesInput = {
    update: Prisma.XOR<Prisma.GroupUpdateWithoutExpensesInput, Prisma.GroupUncheckedUpdateWithoutExpensesInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutExpensesInput, Prisma.GroupUncheckedCreateWithoutExpensesInput>;
    where?: Prisma.GroupWhereInput;
};
export type GroupUpdateToOneWithWhereWithoutExpensesInput = {
    where?: Prisma.GroupWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutExpensesInput, Prisma.GroupUncheckedUpdateWithoutExpensesInput>;
};
export type GroupUpdateWithoutExpensesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOwnedGroupsNestedInput;
    members?: Prisma.GroupMemberUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutExpensesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.IntFieldUpdateOperationsInput | number;
    members?: Prisma.GroupMemberUncheckedUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupCreateWithoutSettlementsInput = {
    name: string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutOwnedGroupsInput;
    members?: Prisma.GroupMemberCreateNestedManyWithoutGroupInput;
    expenses?: Prisma.ExpenseCreateNestedManyWithoutGroupInput;
};
export type GroupUncheckedCreateWithoutSettlementsInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    ownerId: number;
    members?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutGroupInput;
    expenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutSettlementsInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutSettlementsInput, Prisma.GroupUncheckedCreateWithoutSettlementsInput>;
};
export type GroupUpsertWithoutSettlementsInput = {
    update: Prisma.XOR<Prisma.GroupUpdateWithoutSettlementsInput, Prisma.GroupUncheckedUpdateWithoutSettlementsInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutSettlementsInput, Prisma.GroupUncheckedCreateWithoutSettlementsInput>;
    where?: Prisma.GroupWhereInput;
};
export type GroupUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: Prisma.GroupWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutSettlementsInput, Prisma.GroupUncheckedUpdateWithoutSettlementsInput>;
};
export type GroupUpdateWithoutSettlementsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOwnedGroupsNestedInput;
    members?: Prisma.GroupMemberUpdateManyWithoutGroupNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutSettlementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownerId?: Prisma.IntFieldUpdateOperationsInput | number;
    members?: Prisma.GroupMemberUncheckedUpdateManyWithoutGroupNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupCreateManyOwnerInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
};
export type GroupUpdateWithoutOwnerInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.GroupMemberUpdateManyWithoutGroupNestedInput;
    expenses?: Prisma.ExpenseUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.GroupMemberUncheckedUpdateManyWithoutGroupNestedInput;
    expenses?: Prisma.ExpenseUncheckedUpdateManyWithoutGroupNestedInput;
    settlements?: Prisma.SettlementUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupCountOutputType = {
    members: number;
    expenses: number;
    settlements: number;
};
export type GroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs;
    expenses?: boolean | GroupCountOutputTypeCountExpensesArgs;
    settlements?: boolean | GroupCountOutputTypeCountSettlementsArgs;
};
export type GroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupCountOutputTypeSelect<ExtArgs> | null;
};
export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupMemberWhereInput;
};
export type GroupCountOutputTypeCountExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
};
export type GroupCountOutputTypeCountSettlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettlementWhereInput;
};
export type GroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    members?: boolean | Prisma.Group$membersArgs<ExtArgs>;
    expenses?: boolean | Prisma.Group$expensesArgs<ExtArgs>;
    settlements?: boolean | Prisma.Group$settlementsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    ownerId?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    ownerId?: boolean;
};
export type GroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt" | "ownerId", ExtArgs["result"]["group"]>;
export type GroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    members?: boolean | Prisma.Group$membersArgs<ExtArgs>;
    expenses?: boolean | Prisma.Group$expensesArgs<ExtArgs>;
    settlements?: boolean | Prisma.Group$settlementsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $GroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Group";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        members: Prisma.$GroupMemberPayload<ExtArgs>[];
        expenses: Prisma.$ExpensePayload<ExtArgs>[];
        settlements: Prisma.$SettlementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        createdAt: Date;
        ownerId: number;
    }, ExtArgs["result"]["group"]>;
    composites: {};
};
export type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GroupPayload, S>;
export type GroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GroupCountAggregateInputType | true;
};
export interface GroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Group'];
        meta: {
            name: 'Group';
        };
    };
    findUnique<T extends GroupFindUniqueArgs>(args: Prisma.SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GroupFindFirstArgs>(args?: Prisma.SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GroupFindManyArgs>(args?: Prisma.SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GroupCreateArgs>(args: Prisma.SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GroupCreateManyArgs>(args?: Prisma.SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GroupDeleteArgs>(args: Prisma.SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GroupUpdateArgs>(args: Prisma.SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GroupUpdateManyArgs>(args: Prisma.SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GroupUpsertArgs>(args: Prisma.SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GroupCountArgs>(args?: Prisma.Subset<T, GroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GroupCountAggregateOutputType> : number>;
    aggregate<T extends GroupAggregateArgs>(args: Prisma.Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>;
    groupBy<T extends GroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GroupGroupByArgs['orderBy'];
    } : {
        orderBy?: GroupGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GroupFieldRefs;
}
export interface Prisma__GroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    members<T extends Prisma.Group$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expenses<T extends Prisma.Group$expensesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    settlements<T extends Prisma.Group$settlementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GroupFieldRefs {
    readonly id: Prisma.FieldRef<"Group", 'Int'>;
    readonly name: Prisma.FieldRef<"Group", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Group", 'DateTime'>;
    readonly ownerId: Prisma.FieldRef<"Group", 'Int'>;
}
export type GroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type GroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type GroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type GroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupCreateInput, Prisma.GroupUncheckedCreateInput>;
};
export type GroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GroupCreateManyInput | Prisma.GroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    data: Prisma.GroupCreateManyInput | Prisma.GroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupUpdateInput, Prisma.GroupUncheckedUpdateInput>;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyInput>;
    where?: Prisma.GroupWhereInput;
    limit?: number;
};
export type GroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyInput>;
    where?: Prisma.GroupWhereInput;
    limit?: number;
    include?: Prisma.GroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateInput, Prisma.GroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GroupUpdateInput, Prisma.GroupUncheckedUpdateInput>;
};
export type GroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    limit?: number;
};
export type Group$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    where?: Prisma.GroupMemberWhereInput;
    orderBy?: Prisma.GroupMemberOrderByWithRelationInput | Prisma.GroupMemberOrderByWithRelationInput[];
    cursor?: Prisma.GroupMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupMemberScalarFieldEnum | Prisma.GroupMemberScalarFieldEnum[];
};
export type Group$expensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseScalarFieldEnum | Prisma.ExpenseScalarFieldEnum[];
};
export type Group$settlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
    where?: Prisma.SettlementWhereInput;
    orderBy?: Prisma.SettlementOrderByWithRelationInput | Prisma.SettlementOrderByWithRelationInput[];
    cursor?: Prisma.SettlementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SettlementScalarFieldEnum | Prisma.SettlementScalarFieldEnum[];
};
export type GroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    createdAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    createdAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    passwordHash: number;
    createdAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    createdAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    createdAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    createdAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    ownedGroups?: Prisma.GroupListRelationFilter;
    memberships?: Prisma.GroupMemberListRelationFilter;
    paidExpenses?: Prisma.ExpenseListRelationFilter;
    splits?: Prisma.ExpenseSplitListRelationFilter;
    sentSettlements?: Prisma.SettlementListRelationFilter;
    receivedSettlements?: Prisma.SettlementListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ownedGroups?: Prisma.GroupOrderByRelationAggregateInput;
    memberships?: Prisma.GroupMemberOrderByRelationAggregateInput;
    paidExpenses?: Prisma.ExpenseOrderByRelationAggregateInput;
    splits?: Prisma.ExpenseSplitOrderByRelationAggregateInput;
    sentSettlements?: Prisma.SettlementOrderByRelationAggregateInput;
    receivedSettlements?: Prisma.SettlementOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    ownedGroups?: Prisma.GroupListRelationFilter;
    memberships?: Prisma.GroupMemberListRelationFilter;
    paidExpenses?: Prisma.ExpenseListRelationFilter;
    splits?: Prisma.ExpenseSplitListRelationFilter;
    sentSettlements?: Prisma.SettlementListRelationFilter;
    receivedSettlements?: Prisma.SettlementListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementCreateNestedManyWithoutToUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutToUserInput;
};
export type UserUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUpdateManyWithoutToUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUncheckedUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutToUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutOwnedGroupsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOwnedGroupsInput, Prisma.UserUncheckedCreateWithoutOwnedGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOwnedGroupsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOwnedGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOwnedGroupsInput, Prisma.UserUncheckedCreateWithoutOwnedGroupsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOwnedGroupsInput;
    upsert?: Prisma.UserUpsertWithoutOwnedGroupsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOwnedGroupsInput, Prisma.UserUpdateWithoutOwnedGroupsInput>, Prisma.UserUncheckedUpdateWithoutOwnedGroupsInput>;
};
export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMembershipsInput, Prisma.UserUpdateWithoutMembershipsInput>, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserCreateNestedOneWithoutPaidExpensesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaidExpensesInput, Prisma.UserUncheckedCreateWithoutPaidExpensesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaidExpensesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPaidExpensesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPaidExpensesInput, Prisma.UserUncheckedCreateWithoutPaidExpensesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPaidExpensesInput;
    upsert?: Prisma.UserUpsertWithoutPaidExpensesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPaidExpensesInput, Prisma.UserUpdateWithoutPaidExpensesInput>, Prisma.UserUncheckedUpdateWithoutPaidExpensesInput>;
};
export type UserCreateNestedOneWithoutSplitsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSplitsInput, Prisma.UserUncheckedCreateWithoutSplitsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSplitsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSplitsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSplitsInput, Prisma.UserUncheckedCreateWithoutSplitsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSplitsInput;
    upsert?: Prisma.UserUpsertWithoutSplitsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSplitsInput, Prisma.UserUpdateWithoutSplitsInput>, Prisma.UserUncheckedUpdateWithoutSplitsInput>;
};
export type UserCreateNestedOneWithoutSentSettlementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentSettlementsInput, Prisma.UserUncheckedCreateWithoutSentSettlementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentSettlementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReceivedSettlementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceivedSettlementsInput, Prisma.UserUncheckedCreateWithoutReceivedSettlementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceivedSettlementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSentSettlementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSentSettlementsInput, Prisma.UserUncheckedCreateWithoutSentSettlementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSentSettlementsInput;
    upsert?: Prisma.UserUpsertWithoutSentSettlementsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSentSettlementsInput, Prisma.UserUpdateWithoutSentSettlementsInput>, Prisma.UserUncheckedUpdateWithoutSentSettlementsInput>;
};
export type UserUpdateOneRequiredWithoutReceivedSettlementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReceivedSettlementsInput, Prisma.UserUncheckedCreateWithoutReceivedSettlementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReceivedSettlementsInput;
    upsert?: Prisma.UserUpsertWithoutReceivedSettlementsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReceivedSettlementsInput, Prisma.UserUpdateWithoutReceivedSettlementsInput>, Prisma.UserUncheckedUpdateWithoutReceivedSettlementsInput>;
};
export type UserCreateWithoutOwnedGroupsInput = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementCreateNestedManyWithoutToUserInput;
};
export type UserUncheckedCreateWithoutOwnedGroupsInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutToUserInput;
};
export type UserCreateOrConnectWithoutOwnedGroupsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOwnedGroupsInput, Prisma.UserUncheckedCreateWithoutOwnedGroupsInput>;
};
export type UserUpsertWithoutOwnedGroupsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOwnedGroupsInput, Prisma.UserUncheckedUpdateWithoutOwnedGroupsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOwnedGroupsInput, Prisma.UserUncheckedCreateWithoutOwnedGroupsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOwnedGroupsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOwnedGroupsInput, Prisma.UserUncheckedUpdateWithoutOwnedGroupsInput>;
};
export type UserUpdateWithoutOwnedGroupsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUpdateManyWithoutToUserNestedInput;
};
export type UserUncheckedUpdateWithoutOwnedGroupsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUncheckedUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutToUserNestedInput;
};
export type UserCreateWithoutMembershipsInput = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupCreateNestedManyWithoutOwnerInput;
    paidExpenses?: Prisma.ExpenseCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementCreateNestedManyWithoutToUserInput;
};
export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutOwnerInput;
    paidExpenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutToUserInput;
};
export type UserCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
};
export type UserUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserUpdateWithoutMembershipsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUpdateManyWithoutOwnerNestedInput;
    paidExpenses?: Prisma.ExpenseUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUpdateManyWithoutToUserNestedInput;
};
export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput;
    paidExpenses?: Prisma.ExpenseUncheckedUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutToUserNestedInput;
};
export type UserCreateWithoutPaidExpensesInput = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementCreateNestedManyWithoutToUserInput;
};
export type UserUncheckedCreateWithoutPaidExpensesInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutToUserInput;
};
export type UserCreateOrConnectWithoutPaidExpensesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaidExpensesInput, Prisma.UserUncheckedCreateWithoutPaidExpensesInput>;
};
export type UserUpsertWithoutPaidExpensesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPaidExpensesInput, Prisma.UserUncheckedUpdateWithoutPaidExpensesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPaidExpensesInput, Prisma.UserUncheckedCreateWithoutPaidExpensesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPaidExpensesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPaidExpensesInput, Prisma.UserUncheckedUpdateWithoutPaidExpensesInput>;
};
export type UserUpdateWithoutPaidExpensesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUpdateManyWithoutToUserNestedInput;
};
export type UserUncheckedUpdateWithoutPaidExpensesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutToUserNestedInput;
};
export type UserCreateWithoutSplitsInput = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseCreateNestedManyWithoutPaidByInput;
    sentSettlements?: Prisma.SettlementCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementCreateNestedManyWithoutToUserInput;
};
export type UserUncheckedCreateWithoutSplitsInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutPaidByInput;
    sentSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutFromUserInput;
    receivedSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutToUserInput;
};
export type UserCreateOrConnectWithoutSplitsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSplitsInput, Prisma.UserUncheckedCreateWithoutSplitsInput>;
};
export type UserUpsertWithoutSplitsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSplitsInput, Prisma.UserUncheckedUpdateWithoutSplitsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSplitsInput, Prisma.UserUncheckedCreateWithoutSplitsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSplitsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSplitsInput, Prisma.UserUncheckedUpdateWithoutSplitsInput>;
};
export type UserUpdateWithoutSplitsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUpdateManyWithoutPaidByNestedInput;
    sentSettlements?: Prisma.SettlementUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUpdateManyWithoutToUserNestedInput;
};
export type UserUncheckedUpdateWithoutSplitsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUncheckedUpdateManyWithoutPaidByNestedInput;
    sentSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutFromUserNestedInput;
    receivedSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutToUserNestedInput;
};
export type UserCreateWithoutSentSettlementsInput = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutUserInput;
    receivedSettlements?: Prisma.SettlementCreateNestedManyWithoutToUserInput;
};
export type UserUncheckedCreateWithoutSentSettlementsInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutUserInput;
    receivedSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutToUserInput;
};
export type UserCreateOrConnectWithoutSentSettlementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentSettlementsInput, Prisma.UserUncheckedCreateWithoutSentSettlementsInput>;
};
export type UserCreateWithoutReceivedSettlementsInput = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementCreateNestedManyWithoutFromUserInput;
};
export type UserUncheckedCreateWithoutReceivedSettlementsInput = {
    id?: number;
    name: string;
    email: string;
    passwordHash: string;
    createdAt?: Date | string;
    ownedGroups?: Prisma.GroupUncheckedCreateNestedManyWithoutOwnerInput;
    memberships?: Prisma.GroupMemberUncheckedCreateNestedManyWithoutUserInput;
    paidExpenses?: Prisma.ExpenseUncheckedCreateNestedManyWithoutPaidByInput;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutUserInput;
    sentSettlements?: Prisma.SettlementUncheckedCreateNestedManyWithoutFromUserInput;
};
export type UserCreateOrConnectWithoutReceivedSettlementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceivedSettlementsInput, Prisma.UserUncheckedCreateWithoutReceivedSettlementsInput>;
};
export type UserUpsertWithoutSentSettlementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSentSettlementsInput, Prisma.UserUncheckedUpdateWithoutSentSettlementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSentSettlementsInput, Prisma.UserUncheckedCreateWithoutSentSettlementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSentSettlementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSentSettlementsInput, Prisma.UserUncheckedUpdateWithoutSentSettlementsInput>;
};
export type UserUpdateWithoutSentSettlementsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutUserNestedInput;
    receivedSettlements?: Prisma.SettlementUpdateManyWithoutToUserNestedInput;
};
export type UserUncheckedUpdateWithoutSentSettlementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUncheckedUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput;
    receivedSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutToUserNestedInput;
};
export type UserUpsertWithoutReceivedSettlementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReceivedSettlementsInput, Prisma.UserUncheckedUpdateWithoutReceivedSettlementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReceivedSettlementsInput, Prisma.UserUncheckedCreateWithoutReceivedSettlementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReceivedSettlementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReceivedSettlementsInput, Prisma.UserUncheckedUpdateWithoutReceivedSettlementsInput>;
};
export type UserUpdateWithoutReceivedSettlementsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUpdateManyWithoutFromUserNestedInput;
};
export type UserUncheckedUpdateWithoutReceivedSettlementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ownedGroups?: Prisma.GroupUncheckedUpdateManyWithoutOwnerNestedInput;
    memberships?: Prisma.GroupMemberUncheckedUpdateManyWithoutUserNestedInput;
    paidExpenses?: Prisma.ExpenseUncheckedUpdateManyWithoutPaidByNestedInput;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput;
    sentSettlements?: Prisma.SettlementUncheckedUpdateManyWithoutFromUserNestedInput;
};
export type UserCountOutputType = {
    ownedGroups: number;
    memberships: number;
    paidExpenses: number;
    splits: number;
    sentSettlements: number;
    receivedSettlements: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ownedGroups?: boolean | UserCountOutputTypeCountOwnedGroupsArgs;
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs;
    paidExpenses?: boolean | UserCountOutputTypeCountPaidExpensesArgs;
    splits?: boolean | UserCountOutputTypeCountSplitsArgs;
    sentSettlements?: boolean | UserCountOutputTypeCountSentSettlementsArgs;
    receivedSettlements?: boolean | UserCountOutputTypeCountReceivedSettlementsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountOwnedGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupMemberWhereInput;
};
export type UserCountOutputTypeCountPaidExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
};
export type UserCountOutputTypeCountSplitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
};
export type UserCountOutputTypeCountSentSettlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettlementWhereInput;
};
export type UserCountOutputTypeCountReceivedSettlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettlementWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    createdAt?: boolean;
    ownedGroups?: boolean | Prisma.User$ownedGroupsArgs<ExtArgs>;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    paidExpenses?: boolean | Prisma.User$paidExpensesArgs<ExtArgs>;
    splits?: boolean | Prisma.User$splitsArgs<ExtArgs>;
    sentSettlements?: boolean | Prisma.User$sentSettlementsArgs<ExtArgs>;
    receivedSettlements?: boolean | Prisma.User$receivedSettlementsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    createdAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ownedGroups?: boolean | Prisma.User$ownedGroupsArgs<ExtArgs>;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    paidExpenses?: boolean | Prisma.User$paidExpensesArgs<ExtArgs>;
    splits?: boolean | Prisma.User$splitsArgs<ExtArgs>;
    sentSettlements?: boolean | Prisma.User$sentSettlementsArgs<ExtArgs>;
    receivedSettlements?: boolean | Prisma.User$receivedSettlementsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        ownedGroups: Prisma.$GroupPayload<ExtArgs>[];
        memberships: Prisma.$GroupMemberPayload<ExtArgs>[];
        paidExpenses: Prisma.$ExpensePayload<ExtArgs>[];
        splits: Prisma.$ExpenseSplitPayload<ExtArgs>[];
        sentSettlements: Prisma.$SettlementPayload<ExtArgs>[];
        receivedSettlements: Prisma.$SettlementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        email: string;
        passwordHash: string;
        createdAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ownedGroups<T extends Prisma.User$ownedGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ownedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    memberships<T extends Prisma.User$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    paidExpenses<T extends Prisma.User$paidExpensesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$paidExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    splits<T extends Prisma.User$splitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$splitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sentSettlements<T extends Prisma.User$sentSettlementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sentSettlementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    receivedSettlements<T extends Prisma.User$receivedSettlementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$receivedSettlementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$ownedGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$paidExpensesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$splitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithRelationInput | Prisma.ExpenseSplitOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseSplitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExpenseSplitScalarFieldEnum | Prisma.ExpenseSplitScalarFieldEnum[];
};
export type User$sentSettlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$receivedSettlementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};

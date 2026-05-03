import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SettlementModel = runtime.Types.Result.DefaultSelection<Prisma.$SettlementPayload>;
export type AggregateSettlement = {
    _count: SettlementCountAggregateOutputType | null;
    _avg: SettlementAvgAggregateOutputType | null;
    _sum: SettlementSumAggregateOutputType | null;
    _min: SettlementMinAggregateOutputType | null;
    _max: SettlementMaxAggregateOutputType | null;
};
export type SettlementAvgAggregateOutputType = {
    id: number | null;
    amount: number | null;
    groupId: number | null;
    fromUserId: number | null;
    toUserId: number | null;
};
export type SettlementSumAggregateOutputType = {
    id: number | null;
    amount: number | null;
    groupId: number | null;
    fromUserId: number | null;
    toUserId: number | null;
};
export type SettlementMinAggregateOutputType = {
    id: number | null;
    amount: number | null;
    settledAt: Date | null;
    groupId: number | null;
    fromUserId: number | null;
    toUserId: number | null;
};
export type SettlementMaxAggregateOutputType = {
    id: number | null;
    amount: number | null;
    settledAt: Date | null;
    groupId: number | null;
    fromUserId: number | null;
    toUserId: number | null;
};
export type SettlementCountAggregateOutputType = {
    id: number;
    amount: number;
    settledAt: number;
    groupId: number;
    fromUserId: number;
    toUserId: number;
    _all: number;
};
export type SettlementAvgAggregateInputType = {
    id?: true;
    amount?: true;
    groupId?: true;
    fromUserId?: true;
    toUserId?: true;
};
export type SettlementSumAggregateInputType = {
    id?: true;
    amount?: true;
    groupId?: true;
    fromUserId?: true;
    toUserId?: true;
};
export type SettlementMinAggregateInputType = {
    id?: true;
    amount?: true;
    settledAt?: true;
    groupId?: true;
    fromUserId?: true;
    toUserId?: true;
};
export type SettlementMaxAggregateInputType = {
    id?: true;
    amount?: true;
    settledAt?: true;
    groupId?: true;
    fromUserId?: true;
    toUserId?: true;
};
export type SettlementCountAggregateInputType = {
    id?: true;
    amount?: true;
    settledAt?: true;
    groupId?: true;
    fromUserId?: true;
    toUserId?: true;
    _all?: true;
};
export type SettlementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettlementWhereInput;
    orderBy?: Prisma.SettlementOrderByWithRelationInput | Prisma.SettlementOrderByWithRelationInput[];
    cursor?: Prisma.SettlementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SettlementCountAggregateInputType;
    _avg?: SettlementAvgAggregateInputType;
    _sum?: SettlementSumAggregateInputType;
    _min?: SettlementMinAggregateInputType;
    _max?: SettlementMaxAggregateInputType;
};
export type GetSettlementAggregateType<T extends SettlementAggregateArgs> = {
    [P in keyof T & keyof AggregateSettlement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSettlement[P]> : Prisma.GetScalarType<T[P], AggregateSettlement[P]>;
};
export type SettlementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettlementWhereInput;
    orderBy?: Prisma.SettlementOrderByWithAggregationInput | Prisma.SettlementOrderByWithAggregationInput[];
    by: Prisma.SettlementScalarFieldEnum[] | Prisma.SettlementScalarFieldEnum;
    having?: Prisma.SettlementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SettlementCountAggregateInputType | true;
    _avg?: SettlementAvgAggregateInputType;
    _sum?: SettlementSumAggregateInputType;
    _min?: SettlementMinAggregateInputType;
    _max?: SettlementMaxAggregateInputType;
};
export type SettlementGroupByOutputType = {
    id: number;
    amount: number;
    settledAt: Date;
    groupId: number;
    fromUserId: number;
    toUserId: number;
    _count: SettlementCountAggregateOutputType | null;
    _avg: SettlementAvgAggregateOutputType | null;
    _sum: SettlementSumAggregateOutputType | null;
    _min: SettlementMinAggregateOutputType | null;
    _max: SettlementMaxAggregateOutputType | null;
};
export type GetSettlementGroupByPayload<T extends SettlementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SettlementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SettlementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SettlementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SettlementGroupByOutputType[P]>;
}>>;
export type SettlementWhereInput = {
    AND?: Prisma.SettlementWhereInput | Prisma.SettlementWhereInput[];
    OR?: Prisma.SettlementWhereInput[];
    NOT?: Prisma.SettlementWhereInput | Prisma.SettlementWhereInput[];
    id?: Prisma.IntFilter<"Settlement"> | number;
    amount?: Prisma.FloatFilter<"Settlement"> | number;
    settledAt?: Prisma.DateTimeFilter<"Settlement"> | Date | string;
    groupId?: Prisma.IntFilter<"Settlement"> | number;
    fromUserId?: Prisma.IntFilter<"Settlement"> | number;
    toUserId?: Prisma.IntFilter<"Settlement"> | number;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    fromUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    toUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SettlementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    settledAt?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    fromUser?: Prisma.UserOrderByWithRelationInput;
    toUser?: Prisma.UserOrderByWithRelationInput;
};
export type SettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SettlementWhereInput | Prisma.SettlementWhereInput[];
    OR?: Prisma.SettlementWhereInput[];
    NOT?: Prisma.SettlementWhereInput | Prisma.SettlementWhereInput[];
    amount?: Prisma.FloatFilter<"Settlement"> | number;
    settledAt?: Prisma.DateTimeFilter<"Settlement"> | Date | string;
    groupId?: Prisma.IntFilter<"Settlement"> | number;
    fromUserId?: Prisma.IntFilter<"Settlement"> | number;
    toUserId?: Prisma.IntFilter<"Settlement"> | number;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    fromUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    toUser?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type SettlementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    settledAt?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
    _count?: Prisma.SettlementCountOrderByAggregateInput;
    _avg?: Prisma.SettlementAvgOrderByAggregateInput;
    _max?: Prisma.SettlementMaxOrderByAggregateInput;
    _min?: Prisma.SettlementMinOrderByAggregateInput;
    _sum?: Prisma.SettlementSumOrderByAggregateInput;
};
export type SettlementScalarWhereWithAggregatesInput = {
    AND?: Prisma.SettlementScalarWhereWithAggregatesInput | Prisma.SettlementScalarWhereWithAggregatesInput[];
    OR?: Prisma.SettlementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SettlementScalarWhereWithAggregatesInput | Prisma.SettlementScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Settlement"> | number;
    amount?: Prisma.FloatWithAggregatesFilter<"Settlement"> | number;
    settledAt?: Prisma.DateTimeWithAggregatesFilter<"Settlement"> | Date | string;
    groupId?: Prisma.IntWithAggregatesFilter<"Settlement"> | number;
    fromUserId?: Prisma.IntWithAggregatesFilter<"Settlement"> | number;
    toUserId?: Prisma.IntWithAggregatesFilter<"Settlement"> | number;
};
export type SettlementCreateInput = {
    amount: number;
    settledAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutSettlementsInput;
    fromUser: Prisma.UserCreateNestedOneWithoutSentSettlementsInput;
    toUser: Prisma.UserCreateNestedOneWithoutReceivedSettlementsInput;
};
export type SettlementUncheckedCreateInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    groupId: number;
    fromUserId: number;
    toUserId: number;
};
export type SettlementUpdateInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutSettlementsNestedInput;
    fromUser?: Prisma.UserUpdateOneRequiredWithoutSentSettlementsNestedInput;
    toUser?: Prisma.UserUpdateOneRequiredWithoutReceivedSettlementsNestedInput;
};
export type SettlementUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    fromUserId?: Prisma.IntFieldUpdateOperationsInput | number;
    toUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementCreateManyInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    groupId: number;
    fromUserId: number;
    toUserId: number;
};
export type SettlementUpdateManyMutationInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SettlementUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    fromUserId?: Prisma.IntFieldUpdateOperationsInput | number;
    toUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementListRelationFilter = {
    every?: Prisma.SettlementWhereInput;
    some?: Prisma.SettlementWhereInput;
    none?: Prisma.SettlementWhereInput;
};
export type SettlementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SettlementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    settledAt?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
};
export type SettlementAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
};
export type SettlementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    settledAt?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
};
export type SettlementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    settledAt?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
};
export type SettlementSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    fromUserId?: Prisma.SortOrder;
    toUserId?: Prisma.SortOrder;
};
export type SettlementCreateNestedManyWithoutFromUserInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutFromUserInput, Prisma.SettlementUncheckedCreateWithoutFromUserInput> | Prisma.SettlementCreateWithoutFromUserInput[] | Prisma.SettlementUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutFromUserInput | Prisma.SettlementCreateOrConnectWithoutFromUserInput[];
    createMany?: Prisma.SettlementCreateManyFromUserInputEnvelope;
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
};
export type SettlementCreateNestedManyWithoutToUserInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutToUserInput, Prisma.SettlementUncheckedCreateWithoutToUserInput> | Prisma.SettlementCreateWithoutToUserInput[] | Prisma.SettlementUncheckedCreateWithoutToUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutToUserInput | Prisma.SettlementCreateOrConnectWithoutToUserInput[];
    createMany?: Prisma.SettlementCreateManyToUserInputEnvelope;
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
};
export type SettlementUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutFromUserInput, Prisma.SettlementUncheckedCreateWithoutFromUserInput> | Prisma.SettlementCreateWithoutFromUserInput[] | Prisma.SettlementUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutFromUserInput | Prisma.SettlementCreateOrConnectWithoutFromUserInput[];
    createMany?: Prisma.SettlementCreateManyFromUserInputEnvelope;
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
};
export type SettlementUncheckedCreateNestedManyWithoutToUserInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutToUserInput, Prisma.SettlementUncheckedCreateWithoutToUserInput> | Prisma.SettlementCreateWithoutToUserInput[] | Prisma.SettlementUncheckedCreateWithoutToUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutToUserInput | Prisma.SettlementCreateOrConnectWithoutToUserInput[];
    createMany?: Prisma.SettlementCreateManyToUserInputEnvelope;
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
};
export type SettlementUpdateManyWithoutFromUserNestedInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutFromUserInput, Prisma.SettlementUncheckedCreateWithoutFromUserInput> | Prisma.SettlementCreateWithoutFromUserInput[] | Prisma.SettlementUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutFromUserInput | Prisma.SettlementCreateOrConnectWithoutFromUserInput[];
    upsert?: Prisma.SettlementUpsertWithWhereUniqueWithoutFromUserInput | Prisma.SettlementUpsertWithWhereUniqueWithoutFromUserInput[];
    createMany?: Prisma.SettlementCreateManyFromUserInputEnvelope;
    set?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    disconnect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    delete?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    update?: Prisma.SettlementUpdateWithWhereUniqueWithoutFromUserInput | Prisma.SettlementUpdateWithWhereUniqueWithoutFromUserInput[];
    updateMany?: Prisma.SettlementUpdateManyWithWhereWithoutFromUserInput | Prisma.SettlementUpdateManyWithWhereWithoutFromUserInput[];
    deleteMany?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
};
export type SettlementUpdateManyWithoutToUserNestedInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutToUserInput, Prisma.SettlementUncheckedCreateWithoutToUserInput> | Prisma.SettlementCreateWithoutToUserInput[] | Prisma.SettlementUncheckedCreateWithoutToUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutToUserInput | Prisma.SettlementCreateOrConnectWithoutToUserInput[];
    upsert?: Prisma.SettlementUpsertWithWhereUniqueWithoutToUserInput | Prisma.SettlementUpsertWithWhereUniqueWithoutToUserInput[];
    createMany?: Prisma.SettlementCreateManyToUserInputEnvelope;
    set?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    disconnect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    delete?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    update?: Prisma.SettlementUpdateWithWhereUniqueWithoutToUserInput | Prisma.SettlementUpdateWithWhereUniqueWithoutToUserInput[];
    updateMany?: Prisma.SettlementUpdateManyWithWhereWithoutToUserInput | Prisma.SettlementUpdateManyWithWhereWithoutToUserInput[];
    deleteMany?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
};
export type SettlementUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutFromUserInput, Prisma.SettlementUncheckedCreateWithoutFromUserInput> | Prisma.SettlementCreateWithoutFromUserInput[] | Prisma.SettlementUncheckedCreateWithoutFromUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutFromUserInput | Prisma.SettlementCreateOrConnectWithoutFromUserInput[];
    upsert?: Prisma.SettlementUpsertWithWhereUniqueWithoutFromUserInput | Prisma.SettlementUpsertWithWhereUniqueWithoutFromUserInput[];
    createMany?: Prisma.SettlementCreateManyFromUserInputEnvelope;
    set?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    disconnect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    delete?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    update?: Prisma.SettlementUpdateWithWhereUniqueWithoutFromUserInput | Prisma.SettlementUpdateWithWhereUniqueWithoutFromUserInput[];
    updateMany?: Prisma.SettlementUpdateManyWithWhereWithoutFromUserInput | Prisma.SettlementUpdateManyWithWhereWithoutFromUserInput[];
    deleteMany?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
};
export type SettlementUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutToUserInput, Prisma.SettlementUncheckedCreateWithoutToUserInput> | Prisma.SettlementCreateWithoutToUserInput[] | Prisma.SettlementUncheckedCreateWithoutToUserInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutToUserInput | Prisma.SettlementCreateOrConnectWithoutToUserInput[];
    upsert?: Prisma.SettlementUpsertWithWhereUniqueWithoutToUserInput | Prisma.SettlementUpsertWithWhereUniqueWithoutToUserInput[];
    createMany?: Prisma.SettlementCreateManyToUserInputEnvelope;
    set?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    disconnect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    delete?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    update?: Prisma.SettlementUpdateWithWhereUniqueWithoutToUserInput | Prisma.SettlementUpdateWithWhereUniqueWithoutToUserInput[];
    updateMany?: Prisma.SettlementUpdateManyWithWhereWithoutToUserInput | Prisma.SettlementUpdateManyWithWhereWithoutToUserInput[];
    deleteMany?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
};
export type SettlementCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutGroupInput, Prisma.SettlementUncheckedCreateWithoutGroupInput> | Prisma.SettlementCreateWithoutGroupInput[] | Prisma.SettlementUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutGroupInput | Prisma.SettlementCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.SettlementCreateManyGroupInputEnvelope;
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
};
export type SettlementUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutGroupInput, Prisma.SettlementUncheckedCreateWithoutGroupInput> | Prisma.SettlementCreateWithoutGroupInput[] | Prisma.SettlementUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutGroupInput | Prisma.SettlementCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.SettlementCreateManyGroupInputEnvelope;
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
};
export type SettlementUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutGroupInput, Prisma.SettlementUncheckedCreateWithoutGroupInput> | Prisma.SettlementCreateWithoutGroupInput[] | Prisma.SettlementUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutGroupInput | Prisma.SettlementCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.SettlementUpsertWithWhereUniqueWithoutGroupInput | Prisma.SettlementUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.SettlementCreateManyGroupInputEnvelope;
    set?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    disconnect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    delete?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    update?: Prisma.SettlementUpdateWithWhereUniqueWithoutGroupInput | Prisma.SettlementUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.SettlementUpdateManyWithWhereWithoutGroupInput | Prisma.SettlementUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
};
export type SettlementUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.SettlementCreateWithoutGroupInput, Prisma.SettlementUncheckedCreateWithoutGroupInput> | Prisma.SettlementCreateWithoutGroupInput[] | Prisma.SettlementUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.SettlementCreateOrConnectWithoutGroupInput | Prisma.SettlementCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.SettlementUpsertWithWhereUniqueWithoutGroupInput | Prisma.SettlementUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.SettlementCreateManyGroupInputEnvelope;
    set?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    disconnect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    delete?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    connect?: Prisma.SettlementWhereUniqueInput | Prisma.SettlementWhereUniqueInput[];
    update?: Prisma.SettlementUpdateWithWhereUniqueWithoutGroupInput | Prisma.SettlementUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.SettlementUpdateManyWithWhereWithoutGroupInput | Prisma.SettlementUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
};
export type SettlementCreateWithoutFromUserInput = {
    amount: number;
    settledAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutSettlementsInput;
    toUser: Prisma.UserCreateNestedOneWithoutReceivedSettlementsInput;
};
export type SettlementUncheckedCreateWithoutFromUserInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    groupId: number;
    toUserId: number;
};
export type SettlementCreateOrConnectWithoutFromUserInput = {
    where: Prisma.SettlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.SettlementCreateWithoutFromUserInput, Prisma.SettlementUncheckedCreateWithoutFromUserInput>;
};
export type SettlementCreateManyFromUserInputEnvelope = {
    data: Prisma.SettlementCreateManyFromUserInput | Prisma.SettlementCreateManyFromUserInput[];
    skipDuplicates?: boolean;
};
export type SettlementCreateWithoutToUserInput = {
    amount: number;
    settledAt?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutSettlementsInput;
    fromUser: Prisma.UserCreateNestedOneWithoutSentSettlementsInput;
};
export type SettlementUncheckedCreateWithoutToUserInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    groupId: number;
    fromUserId: number;
};
export type SettlementCreateOrConnectWithoutToUserInput = {
    where: Prisma.SettlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.SettlementCreateWithoutToUserInput, Prisma.SettlementUncheckedCreateWithoutToUserInput>;
};
export type SettlementCreateManyToUserInputEnvelope = {
    data: Prisma.SettlementCreateManyToUserInput | Prisma.SettlementCreateManyToUserInput[];
    skipDuplicates?: boolean;
};
export type SettlementUpsertWithWhereUniqueWithoutFromUserInput = {
    where: Prisma.SettlementWhereUniqueInput;
    update: Prisma.XOR<Prisma.SettlementUpdateWithoutFromUserInput, Prisma.SettlementUncheckedUpdateWithoutFromUserInput>;
    create: Prisma.XOR<Prisma.SettlementCreateWithoutFromUserInput, Prisma.SettlementUncheckedCreateWithoutFromUserInput>;
};
export type SettlementUpdateWithWhereUniqueWithoutFromUserInput = {
    where: Prisma.SettlementWhereUniqueInput;
    data: Prisma.XOR<Prisma.SettlementUpdateWithoutFromUserInput, Prisma.SettlementUncheckedUpdateWithoutFromUserInput>;
};
export type SettlementUpdateManyWithWhereWithoutFromUserInput = {
    where: Prisma.SettlementScalarWhereInput;
    data: Prisma.XOR<Prisma.SettlementUpdateManyMutationInput, Prisma.SettlementUncheckedUpdateManyWithoutFromUserInput>;
};
export type SettlementScalarWhereInput = {
    AND?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
    OR?: Prisma.SettlementScalarWhereInput[];
    NOT?: Prisma.SettlementScalarWhereInput | Prisma.SettlementScalarWhereInput[];
    id?: Prisma.IntFilter<"Settlement"> | number;
    amount?: Prisma.FloatFilter<"Settlement"> | number;
    settledAt?: Prisma.DateTimeFilter<"Settlement"> | Date | string;
    groupId?: Prisma.IntFilter<"Settlement"> | number;
    fromUserId?: Prisma.IntFilter<"Settlement"> | number;
    toUserId?: Prisma.IntFilter<"Settlement"> | number;
};
export type SettlementUpsertWithWhereUniqueWithoutToUserInput = {
    where: Prisma.SettlementWhereUniqueInput;
    update: Prisma.XOR<Prisma.SettlementUpdateWithoutToUserInput, Prisma.SettlementUncheckedUpdateWithoutToUserInput>;
    create: Prisma.XOR<Prisma.SettlementCreateWithoutToUserInput, Prisma.SettlementUncheckedCreateWithoutToUserInput>;
};
export type SettlementUpdateWithWhereUniqueWithoutToUserInput = {
    where: Prisma.SettlementWhereUniqueInput;
    data: Prisma.XOR<Prisma.SettlementUpdateWithoutToUserInput, Prisma.SettlementUncheckedUpdateWithoutToUserInput>;
};
export type SettlementUpdateManyWithWhereWithoutToUserInput = {
    where: Prisma.SettlementScalarWhereInput;
    data: Prisma.XOR<Prisma.SettlementUpdateManyMutationInput, Prisma.SettlementUncheckedUpdateManyWithoutToUserInput>;
};
export type SettlementCreateWithoutGroupInput = {
    amount: number;
    settledAt?: Date | string;
    fromUser: Prisma.UserCreateNestedOneWithoutSentSettlementsInput;
    toUser: Prisma.UserCreateNestedOneWithoutReceivedSettlementsInput;
};
export type SettlementUncheckedCreateWithoutGroupInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    fromUserId: number;
    toUserId: number;
};
export type SettlementCreateOrConnectWithoutGroupInput = {
    where: Prisma.SettlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.SettlementCreateWithoutGroupInput, Prisma.SettlementUncheckedCreateWithoutGroupInput>;
};
export type SettlementCreateManyGroupInputEnvelope = {
    data: Prisma.SettlementCreateManyGroupInput | Prisma.SettlementCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type SettlementUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.SettlementWhereUniqueInput;
    update: Prisma.XOR<Prisma.SettlementUpdateWithoutGroupInput, Prisma.SettlementUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.SettlementCreateWithoutGroupInput, Prisma.SettlementUncheckedCreateWithoutGroupInput>;
};
export type SettlementUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.SettlementWhereUniqueInput;
    data: Prisma.XOR<Prisma.SettlementUpdateWithoutGroupInput, Prisma.SettlementUncheckedUpdateWithoutGroupInput>;
};
export type SettlementUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.SettlementScalarWhereInput;
    data: Prisma.XOR<Prisma.SettlementUpdateManyMutationInput, Prisma.SettlementUncheckedUpdateManyWithoutGroupInput>;
};
export type SettlementCreateManyFromUserInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    groupId: number;
    toUserId: number;
};
export type SettlementCreateManyToUserInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    groupId: number;
    fromUserId: number;
};
export type SettlementUpdateWithoutFromUserInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutSettlementsNestedInput;
    toUser?: Prisma.UserUpdateOneRequiredWithoutReceivedSettlementsNestedInput;
};
export type SettlementUncheckedUpdateWithoutFromUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    toUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementUncheckedUpdateManyWithoutFromUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    toUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementUpdateWithoutToUserInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutSettlementsNestedInput;
    fromUser?: Prisma.UserUpdateOneRequiredWithoutSentSettlementsNestedInput;
};
export type SettlementUncheckedUpdateWithoutToUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    fromUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementUncheckedUpdateManyWithoutToUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    fromUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementCreateManyGroupInput = {
    id?: number;
    amount: number;
    settledAt?: Date | string;
    fromUserId: number;
    toUserId: number;
};
export type SettlementUpdateWithoutGroupInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fromUser?: Prisma.UserUpdateOneRequiredWithoutSentSettlementsNestedInput;
    toUser?: Prisma.UserUpdateOneRequiredWithoutReceivedSettlementsNestedInput;
};
export type SettlementUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fromUserId?: Prisma.IntFieldUpdateOperationsInput | number;
    toUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    settledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fromUserId?: Prisma.IntFieldUpdateOperationsInput | number;
    toUserId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SettlementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    settledAt?: boolean;
    groupId?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    toUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["settlement"]>;
export type SettlementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    settledAt?: boolean;
    groupId?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    toUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["settlement"]>;
export type SettlementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    settledAt?: boolean;
    groupId?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    toUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["settlement"]>;
export type SettlementSelectScalar = {
    id?: boolean;
    amount?: boolean;
    settledAt?: boolean;
    groupId?: boolean;
    fromUserId?: boolean;
    toUserId?: boolean;
};
export type SettlementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "settledAt" | "groupId" | "fromUserId" | "toUserId", ExtArgs["result"]["settlement"]>;
export type SettlementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    toUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SettlementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    toUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SettlementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    fromUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    toUser?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SettlementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Settlement";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        fromUser: Prisma.$UserPayload<ExtArgs>;
        toUser: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        amount: number;
        settledAt: Date;
        groupId: number;
        fromUserId: number;
        toUserId: number;
    }, ExtArgs["result"]["settlement"]>;
    composites: {};
};
export type SettlementGetPayload<S extends boolean | null | undefined | SettlementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SettlementPayload, S>;
export type SettlementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SettlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SettlementCountAggregateInputType | true;
};
export interface SettlementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Settlement'];
        meta: {
            name: 'Settlement';
        };
    };
    findUnique<T extends SettlementFindUniqueArgs>(args: Prisma.SelectSubset<T, SettlementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SettlementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SettlementFindFirstArgs>(args?: Prisma.SelectSubset<T, SettlementFindFirstArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SettlementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SettlementFindManyArgs>(args?: Prisma.SelectSubset<T, SettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SettlementCreateArgs>(args: Prisma.SelectSubset<T, SettlementCreateArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SettlementCreateManyArgs>(args?: Prisma.SelectSubset<T, SettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SettlementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SettlementDeleteArgs>(args: Prisma.SelectSubset<T, SettlementDeleteArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SettlementUpdateArgs>(args: Prisma.SelectSubset<T, SettlementUpdateArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SettlementDeleteManyArgs>(args?: Prisma.SelectSubset<T, SettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SettlementUpdateManyArgs>(args: Prisma.SelectSubset<T, SettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SettlementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SettlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SettlementUpsertArgs>(args: Prisma.SelectSubset<T, SettlementUpsertArgs<ExtArgs>>): Prisma.Prisma__SettlementClient<runtime.Types.Result.GetResult<Prisma.$SettlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SettlementCountArgs>(args?: Prisma.Subset<T, SettlementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SettlementCountAggregateOutputType> : number>;
    aggregate<T extends SettlementAggregateArgs>(args: Prisma.Subset<T, SettlementAggregateArgs>): Prisma.PrismaPromise<GetSettlementAggregateType<T>>;
    groupBy<T extends SettlementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SettlementGroupByArgs['orderBy'];
    } : {
        orderBy?: SettlementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SettlementFieldRefs;
}
export interface Prisma__SettlementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    fromUser<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    toUser<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SettlementFieldRefs {
    readonly id: Prisma.FieldRef<"Settlement", 'Int'>;
    readonly amount: Prisma.FieldRef<"Settlement", 'Float'>;
    readonly settledAt: Prisma.FieldRef<"Settlement", 'DateTime'>;
    readonly groupId: Prisma.FieldRef<"Settlement", 'Int'>;
    readonly fromUserId: Prisma.FieldRef<"Settlement", 'Int'>;
    readonly toUserId: Prisma.FieldRef<"Settlement", 'Int'>;
}
export type SettlementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
    where: Prisma.SettlementWhereUniqueInput;
};
export type SettlementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
    where: Prisma.SettlementWhereUniqueInput;
};
export type SettlementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SettlementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SettlementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SettlementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettlementCreateInput, Prisma.SettlementUncheckedCreateInput>;
};
export type SettlementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SettlementCreateManyInput | Prisma.SettlementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SettlementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    data: Prisma.SettlementCreateManyInput | Prisma.SettlementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SettlementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SettlementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettlementUpdateInput, Prisma.SettlementUncheckedUpdateInput>;
    where: Prisma.SettlementWhereUniqueInput;
};
export type SettlementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SettlementUpdateManyMutationInput, Prisma.SettlementUncheckedUpdateManyInput>;
    where?: Prisma.SettlementWhereInput;
    limit?: number;
};
export type SettlementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettlementUpdateManyMutationInput, Prisma.SettlementUncheckedUpdateManyInput>;
    where?: Prisma.SettlementWhereInput;
    limit?: number;
    include?: Prisma.SettlementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SettlementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
    where: Prisma.SettlementWhereUniqueInput;
    create: Prisma.XOR<Prisma.SettlementCreateInput, Prisma.SettlementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SettlementUpdateInput, Prisma.SettlementUncheckedUpdateInput>;
};
export type SettlementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
    where: Prisma.SettlementWhereUniqueInput;
};
export type SettlementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettlementWhereInput;
    limit?: number;
};
export type SettlementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettlementSelect<ExtArgs> | null;
    omit?: Prisma.SettlementOmit<ExtArgs> | null;
    include?: Prisma.SettlementInclude<ExtArgs> | null;
};

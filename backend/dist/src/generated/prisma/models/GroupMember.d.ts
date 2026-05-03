import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GroupMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$GroupMemberPayload>;
export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null;
    _avg: GroupMemberAvgAggregateOutputType | null;
    _sum: GroupMemberSumAggregateOutputType | null;
    _min: GroupMemberMinAggregateOutputType | null;
    _max: GroupMemberMaxAggregateOutputType | null;
};
export type GroupMemberAvgAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
};
export type GroupMemberSumAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
};
export type GroupMemberMinAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
};
export type GroupMemberMaxAggregateOutputType = {
    id: number | null;
    groupId: number | null;
    userId: number | null;
};
export type GroupMemberCountAggregateOutputType = {
    id: number;
    groupId: number;
    userId: number;
    _all: number;
};
export type GroupMemberAvgAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
};
export type GroupMemberSumAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
};
export type GroupMemberMinAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
};
export type GroupMemberMaxAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
};
export type GroupMemberCountAggregateInputType = {
    id?: true;
    groupId?: true;
    userId?: true;
    _all?: true;
};
export type GroupMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupMemberWhereInput;
    orderBy?: Prisma.GroupMemberOrderByWithRelationInput | Prisma.GroupMemberOrderByWithRelationInput[];
    cursor?: Prisma.GroupMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GroupMemberCountAggregateInputType;
    _avg?: GroupMemberAvgAggregateInputType;
    _sum?: GroupMemberSumAggregateInputType;
    _min?: GroupMemberMinAggregateInputType;
    _max?: GroupMemberMaxAggregateInputType;
};
export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGroupMember[P]> : Prisma.GetScalarType<T[P], AggregateGroupMember[P]>;
};
export type GroupMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupMemberWhereInput;
    orderBy?: Prisma.GroupMemberOrderByWithAggregationInput | Prisma.GroupMemberOrderByWithAggregationInput[];
    by: Prisma.GroupMemberScalarFieldEnum[] | Prisma.GroupMemberScalarFieldEnum;
    having?: Prisma.GroupMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupMemberCountAggregateInputType | true;
    _avg?: GroupMemberAvgAggregateInputType;
    _sum?: GroupMemberSumAggregateInputType;
    _min?: GroupMemberMinAggregateInputType;
    _max?: GroupMemberMaxAggregateInputType;
};
export type GroupMemberGroupByOutputType = {
    id: number;
    groupId: number;
    userId: number;
    _count: GroupMemberCountAggregateOutputType | null;
    _avg: GroupMemberAvgAggregateOutputType | null;
    _sum: GroupMemberSumAggregateOutputType | null;
    _min: GroupMemberMinAggregateOutputType | null;
    _max: GroupMemberMaxAggregateOutputType | null;
};
export type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GroupMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GroupMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GroupMemberGroupByOutputType[P]>;
}>>;
export type GroupMemberWhereInput = {
    AND?: Prisma.GroupMemberWhereInput | Prisma.GroupMemberWhereInput[];
    OR?: Prisma.GroupMemberWhereInput[];
    NOT?: Prisma.GroupMemberWhereInput | Prisma.GroupMemberWhereInput[];
    id?: Prisma.IntFilter<"GroupMember"> | number;
    groupId?: Prisma.IntFilter<"GroupMember"> | number;
    userId?: Prisma.IntFilter<"GroupMember"> | number;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type GroupMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    groupId_userId?: Prisma.GroupMemberGroupIdUserIdCompoundUniqueInput;
    AND?: Prisma.GroupMemberWhereInput | Prisma.GroupMemberWhereInput[];
    OR?: Prisma.GroupMemberWhereInput[];
    NOT?: Prisma.GroupMemberWhereInput | Prisma.GroupMemberWhereInput[];
    groupId?: Prisma.IntFilter<"GroupMember"> | number;
    userId?: Prisma.IntFilter<"GroupMember"> | number;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "groupId_userId">;
export type GroupMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.GroupMemberCountOrderByAggregateInput;
    _avg?: Prisma.GroupMemberAvgOrderByAggregateInput;
    _max?: Prisma.GroupMemberMaxOrderByAggregateInput;
    _min?: Prisma.GroupMemberMinOrderByAggregateInput;
    _sum?: Prisma.GroupMemberSumOrderByAggregateInput;
};
export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.GroupMemberScalarWhereWithAggregatesInput | Prisma.GroupMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.GroupMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GroupMemberScalarWhereWithAggregatesInput | Prisma.GroupMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"GroupMember"> | number;
    groupId?: Prisma.IntWithAggregatesFilter<"GroupMember"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"GroupMember"> | number;
};
export type GroupMemberCreateInput = {
    group: Prisma.GroupCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type GroupMemberUncheckedCreateInput = {
    id?: number;
    groupId: number;
    userId: number;
};
export type GroupMemberUpdateInput = {
    group?: Prisma.GroupUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type GroupMemberUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GroupMemberCreateManyInput = {
    id?: number;
    groupId: number;
    userId: number;
};
export type GroupMemberUpdateManyMutationInput = {};
export type GroupMemberUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GroupMemberListRelationFilter = {
    every?: Prisma.GroupMemberWhereInput;
    some?: Prisma.GroupMemberWhereInput;
    none?: Prisma.GroupMemberWhereInput;
};
export type GroupMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: number;
    userId: number;
};
export type GroupMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GroupMemberAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GroupMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GroupMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GroupMemberSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutUserInput, Prisma.GroupMemberUncheckedCreateWithoutUserInput> | Prisma.GroupMemberCreateWithoutUserInput[] | Prisma.GroupMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutUserInput | Prisma.GroupMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GroupMemberCreateManyUserInputEnvelope;
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
};
export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutUserInput, Prisma.GroupMemberUncheckedCreateWithoutUserInput> | Prisma.GroupMemberCreateWithoutUserInput[] | Prisma.GroupMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutUserInput | Prisma.GroupMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GroupMemberCreateManyUserInputEnvelope;
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
};
export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutUserInput, Prisma.GroupMemberUncheckedCreateWithoutUserInput> | Prisma.GroupMemberCreateWithoutUserInput[] | Prisma.GroupMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutUserInput | Prisma.GroupMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GroupMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.GroupMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GroupMemberCreateManyUserInputEnvelope;
    set?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    delete?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    update?: Prisma.GroupMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.GroupMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GroupMemberUpdateManyWithWhereWithoutUserInput | Prisma.GroupMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GroupMemberScalarWhereInput | Prisma.GroupMemberScalarWhereInput[];
};
export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutUserInput, Prisma.GroupMemberUncheckedCreateWithoutUserInput> | Prisma.GroupMemberCreateWithoutUserInput[] | Prisma.GroupMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutUserInput | Prisma.GroupMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GroupMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.GroupMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GroupMemberCreateManyUserInputEnvelope;
    set?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    delete?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    update?: Prisma.GroupMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.GroupMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GroupMemberUpdateManyWithWhereWithoutUserInput | Prisma.GroupMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GroupMemberScalarWhereInput | Prisma.GroupMemberScalarWhereInput[];
};
export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutGroupInput, Prisma.GroupMemberUncheckedCreateWithoutGroupInput> | Prisma.GroupMemberCreateWithoutGroupInput[] | Prisma.GroupMemberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutGroupInput | Prisma.GroupMemberCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.GroupMemberCreateManyGroupInputEnvelope;
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
};
export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutGroupInput, Prisma.GroupMemberUncheckedCreateWithoutGroupInput> | Prisma.GroupMemberCreateWithoutGroupInput[] | Prisma.GroupMemberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutGroupInput | Prisma.GroupMemberCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.GroupMemberCreateManyGroupInputEnvelope;
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
};
export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutGroupInput, Prisma.GroupMemberUncheckedCreateWithoutGroupInput> | Prisma.GroupMemberCreateWithoutGroupInput[] | Prisma.GroupMemberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutGroupInput | Prisma.GroupMemberCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.GroupMemberUpsertWithWhereUniqueWithoutGroupInput | Prisma.GroupMemberUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.GroupMemberCreateManyGroupInputEnvelope;
    set?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    delete?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    update?: Prisma.GroupMemberUpdateWithWhereUniqueWithoutGroupInput | Prisma.GroupMemberUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.GroupMemberUpdateManyWithWhereWithoutGroupInput | Prisma.GroupMemberUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.GroupMemberScalarWhereInput | Prisma.GroupMemberScalarWhereInput[];
};
export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.GroupMemberCreateWithoutGroupInput, Prisma.GroupMemberUncheckedCreateWithoutGroupInput> | Prisma.GroupMemberCreateWithoutGroupInput[] | Prisma.GroupMemberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.GroupMemberCreateOrConnectWithoutGroupInput | Prisma.GroupMemberCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.GroupMemberUpsertWithWhereUniqueWithoutGroupInput | Prisma.GroupMemberUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.GroupMemberCreateManyGroupInputEnvelope;
    set?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    disconnect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    delete?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    connect?: Prisma.GroupMemberWhereUniqueInput | Prisma.GroupMemberWhereUniqueInput[];
    update?: Prisma.GroupMemberUpdateWithWhereUniqueWithoutGroupInput | Prisma.GroupMemberUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.GroupMemberUpdateManyWithWhereWithoutGroupInput | Prisma.GroupMemberUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.GroupMemberScalarWhereInput | Prisma.GroupMemberScalarWhereInput[];
};
export type GroupMemberCreateWithoutUserInput = {
    group: Prisma.GroupCreateNestedOneWithoutMembersInput;
};
export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: number;
    groupId: number;
};
export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: Prisma.GroupMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupMemberCreateWithoutUserInput, Prisma.GroupMemberUncheckedCreateWithoutUserInput>;
};
export type GroupMemberCreateManyUserInputEnvelope = {
    data: Prisma.GroupMemberCreateManyUserInput | Prisma.GroupMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.GroupMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupMemberUpdateWithoutUserInput, Prisma.GroupMemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GroupMemberCreateWithoutUserInput, Prisma.GroupMemberUncheckedCreateWithoutUserInput>;
};
export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.GroupMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupMemberUpdateWithoutUserInput, Prisma.GroupMemberUncheckedUpdateWithoutUserInput>;
};
export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.GroupMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupMemberUpdateManyMutationInput, Prisma.GroupMemberUncheckedUpdateManyWithoutUserInput>;
};
export type GroupMemberScalarWhereInput = {
    AND?: Prisma.GroupMemberScalarWhereInput | Prisma.GroupMemberScalarWhereInput[];
    OR?: Prisma.GroupMemberScalarWhereInput[];
    NOT?: Prisma.GroupMemberScalarWhereInput | Prisma.GroupMemberScalarWhereInput[];
    id?: Prisma.IntFilter<"GroupMember"> | number;
    groupId?: Prisma.IntFilter<"GroupMember"> | number;
    userId?: Prisma.IntFilter<"GroupMember"> | number;
};
export type GroupMemberCreateWithoutGroupInput = {
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: number;
    userId: number;
};
export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: Prisma.GroupMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupMemberCreateWithoutGroupInput, Prisma.GroupMemberUncheckedCreateWithoutGroupInput>;
};
export type GroupMemberCreateManyGroupInputEnvelope = {
    data: Prisma.GroupMemberCreateManyGroupInput | Prisma.GroupMemberCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.GroupMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupMemberUpdateWithoutGroupInput, Prisma.GroupMemberUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.GroupMemberCreateWithoutGroupInput, Prisma.GroupMemberUncheckedCreateWithoutGroupInput>;
};
export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.GroupMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupMemberUpdateWithoutGroupInput, Prisma.GroupMemberUncheckedUpdateWithoutGroupInput>;
};
export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.GroupMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupMemberUpdateManyMutationInput, Prisma.GroupMemberUncheckedUpdateManyWithoutGroupInput>;
};
export type GroupMemberCreateManyUserInput = {
    id?: number;
    groupId: number;
};
export type GroupMemberUpdateWithoutUserInput = {
    group?: Prisma.GroupUpdateOneRequiredWithoutMembersNestedInput;
};
export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GroupMemberCreateManyGroupInput = {
    id?: number;
    userId: number;
};
export type GroupMemberUpdateWithoutGroupInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GroupMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["groupMember"]>;
export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["groupMember"]>;
export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["groupMember"]>;
export type GroupMemberSelectScalar = {
    id?: boolean;
    groupId?: boolean;
    userId?: boolean;
};
export type GroupMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "groupId" | "userId", ExtArgs["result"]["groupMember"]>;
export type GroupMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $GroupMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GroupMember";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        groupId: number;
        userId: number;
    }, ExtArgs["result"]["groupMember"]>;
    composites: {};
};
export type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload, S>;
export type GroupMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GroupMemberCountAggregateInputType | true;
};
export interface GroupMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'];
        meta: {
            name: 'GroupMember';
        };
    };
    findUnique<T extends GroupMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GroupMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GroupMemberFindManyArgs>(args?: Prisma.SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GroupMemberCreateArgs>(args: Prisma.SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GroupMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GroupMemberDeleteArgs>(args: Prisma.SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GroupMemberUpdateArgs>(args: Prisma.SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GroupMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GroupMemberUpsertArgs>(args: Prisma.SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__GroupMemberClient<runtime.Types.Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GroupMemberCountArgs>(args?: Prisma.Subset<T, GroupMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GroupMemberCountAggregateOutputType> : number>;
    aggregate<T extends GroupMemberAggregateArgs>(args: Prisma.Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>;
    groupBy<T extends GroupMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GroupMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: GroupMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GroupMemberFieldRefs;
}
export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GroupMemberFieldRefs {
    readonly id: Prisma.FieldRef<"GroupMember", 'Int'>;
    readonly groupId: Prisma.FieldRef<"GroupMember", 'Int'>;
    readonly userId: Prisma.FieldRef<"GroupMember", 'Int'>;
}
export type GroupMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    where: Prisma.GroupMemberWhereUniqueInput;
};
export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    where: Prisma.GroupMemberWhereUniqueInput;
};
export type GroupMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GroupMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupMemberCreateInput, Prisma.GroupMemberUncheckedCreateInput>;
};
export type GroupMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GroupMemberCreateManyInput | Prisma.GroupMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    data: Prisma.GroupMemberCreateManyInput | Prisma.GroupMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GroupMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupMemberUpdateInput, Prisma.GroupMemberUncheckedUpdateInput>;
    where: Prisma.GroupMemberWhereUniqueInput;
};
export type GroupMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GroupMemberUpdateManyMutationInput, Prisma.GroupMemberUncheckedUpdateManyInput>;
    where?: Prisma.GroupMemberWhereInput;
    limit?: number;
};
export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupMemberUpdateManyMutationInput, Prisma.GroupMemberUncheckedUpdateManyInput>;
    where?: Prisma.GroupMemberWhereInput;
    limit?: number;
    include?: Prisma.GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GroupMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    where: Prisma.GroupMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupMemberCreateInput, Prisma.GroupMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GroupMemberUpdateInput, Prisma.GroupMemberUncheckedUpdateInput>;
};
export type GroupMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
    where: Prisma.GroupMemberWhereUniqueInput;
};
export type GroupMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupMemberWhereInput;
    limit?: number;
};
export type GroupMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupMemberSelect<ExtArgs> | null;
    omit?: Prisma.GroupMemberOmit<ExtArgs> | null;
    include?: Prisma.GroupMemberInclude<ExtArgs> | null;
};

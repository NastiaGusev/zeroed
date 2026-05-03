import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExpenseModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpensePayload>;
export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
};
export type ExpenseAvgAggregateOutputType = {
    id: number | null;
    amount: number | null;
    groupId: number | null;
    paidById: number | null;
};
export type ExpenseSumAggregateOutputType = {
    id: number | null;
    amount: number | null;
    groupId: number | null;
    paidById: number | null;
};
export type ExpenseMinAggregateOutputType = {
    id: number | null;
    description: string | null;
    amount: number | null;
    date: Date | null;
    groupId: number | null;
    paidById: number | null;
};
export type ExpenseMaxAggregateOutputType = {
    id: number | null;
    description: string | null;
    amount: number | null;
    date: Date | null;
    groupId: number | null;
    paidById: number | null;
};
export type ExpenseCountAggregateOutputType = {
    id: number;
    description: number;
    amount: number;
    date: number;
    groupId: number;
    paidById: number;
    _all: number;
};
export type ExpenseAvgAggregateInputType = {
    id?: true;
    amount?: true;
    groupId?: true;
    paidById?: true;
};
export type ExpenseSumAggregateInputType = {
    id?: true;
    amount?: true;
    groupId?: true;
    paidById?: true;
};
export type ExpenseMinAggregateInputType = {
    id?: true;
    description?: true;
    amount?: true;
    date?: true;
    groupId?: true;
    paidById?: true;
};
export type ExpenseMaxAggregateInputType = {
    id?: true;
    description?: true;
    amount?: true;
    date?: true;
    groupId?: true;
    paidById?: true;
};
export type ExpenseCountAggregateInputType = {
    id?: true;
    description?: true;
    amount?: true;
    date?: true;
    groupId?: true;
    paidById?: true;
    _all?: true;
};
export type ExpenseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithRelationInput | Prisma.ExpenseOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseCountAggregateInputType;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
};
export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
    [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpense[P]> : Prisma.GetScalarType<T[P], AggregateExpense[P]>;
};
export type ExpenseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    orderBy?: Prisma.ExpenseOrderByWithAggregationInput | Prisma.ExpenseOrderByWithAggregationInput[];
    by: Prisma.ExpenseScalarFieldEnum[] | Prisma.ExpenseScalarFieldEnum;
    having?: Prisma.ExpenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCountAggregateInputType | true;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
};
export type ExpenseGroupByOutputType = {
    id: number;
    description: string;
    amount: number;
    date: Date;
    groupId: number;
    paidById: number;
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
};
export type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
}>>;
export type ExpenseWhereInput = {
    AND?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    OR?: Prisma.ExpenseWhereInput[];
    NOT?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    id?: Prisma.IntFilter<"Expense"> | number;
    description?: Prisma.StringFilter<"Expense"> | string;
    amount?: Prisma.FloatFilter<"Expense"> | number;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    groupId?: Prisma.IntFilter<"Expense"> | number;
    paidById?: Prisma.IntFilter<"Expense"> | number;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    paidBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    splits?: Prisma.ExpenseSplitListRelationFilter;
};
export type ExpenseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    paidBy?: Prisma.UserOrderByWithRelationInput;
    splits?: Prisma.ExpenseSplitOrderByRelationAggregateInput;
};
export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    OR?: Prisma.ExpenseWhereInput[];
    NOT?: Prisma.ExpenseWhereInput | Prisma.ExpenseWhereInput[];
    description?: Prisma.StringFilter<"Expense"> | string;
    amount?: Prisma.FloatFilter<"Expense"> | number;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    groupId?: Prisma.IntFilter<"Expense"> | number;
    paidById?: Prisma.IntFilter<"Expense"> | number;
    group?: Prisma.XOR<Prisma.GroupScalarRelationFilter, Prisma.GroupWhereInput>;
    paidBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    splits?: Prisma.ExpenseSplitListRelationFilter;
}, "id">;
export type ExpenseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
    _count?: Prisma.ExpenseCountOrderByAggregateInput;
    _avg?: Prisma.ExpenseAvgOrderByAggregateInput;
    _max?: Prisma.ExpenseMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseMinOrderByAggregateInput;
    _sum?: Prisma.ExpenseSumOrderByAggregateInput;
};
export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseScalarWhereWithAggregatesInput | Prisma.ExpenseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseScalarWhereWithAggregatesInput | Prisma.ExpenseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Expense"> | number;
    description?: Prisma.StringWithAggregatesFilter<"Expense"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"Expense"> | number;
    date?: Prisma.DateTimeWithAggregatesFilter<"Expense"> | Date | string;
    groupId?: Prisma.IntWithAggregatesFilter<"Expense"> | number;
    paidById?: Prisma.IntWithAggregatesFilter<"Expense"> | number;
};
export type ExpenseCreateInput = {
    description: string;
    amount: number;
    date?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutExpensesInput;
    paidBy: Prisma.UserCreateNestedOneWithoutPaidExpensesInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutExpenseInput;
};
export type ExpenseUncheckedCreateInput = {
    id?: number;
    description: string;
    amount: number;
    date?: Date | string;
    groupId: number;
    paidById: number;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput;
};
export type ExpenseUpdateInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutExpensesNestedInput;
    paidBy?: Prisma.UserUpdateOneRequiredWithoutPaidExpensesNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    paidById?: Prisma.IntFieldUpdateOperationsInput | number;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseCreateManyInput = {
    id?: number;
    description: string;
    amount: number;
    date?: Date | string;
    groupId: number;
    paidById: number;
};
export type ExpenseUpdateManyMutationInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExpenseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    paidById?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseListRelationFilter = {
    every?: Prisma.ExpenseWhereInput;
    some?: Prisma.ExpenseWhereInput;
    none?: Prisma.ExpenseWhereInput;
};
export type ExpenseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
};
export type ExpenseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
};
export type ExpenseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
};
export type ExpenseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
};
export type ExpenseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    paidById?: Prisma.SortOrder;
};
export type ExpenseScalarRelationFilter = {
    is?: Prisma.ExpenseWhereInput;
    isNot?: Prisma.ExpenseWhereInput;
};
export type ExpenseCreateNestedManyWithoutPaidByInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUncheckedCreateNestedManyWithoutPaidByInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUpdateManyWithoutPaidByNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput | Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseUncheckedUpdateManyWithoutPaidByNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput> | Prisma.ExpenseCreateWithoutPaidByInput[] | Prisma.ExpenseUncheckedCreateWithoutPaidByInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutPaidByInput | Prisma.ExpenseCreateOrConnectWithoutPaidByInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutPaidByInput[];
    createMany?: Prisma.ExpenseCreateManyPaidByInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutPaidByInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput | Prisma.ExpenseUpdateManyWithWhereWithoutPaidByInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutGroupInput, Prisma.ExpenseUncheckedCreateWithoutGroupInput> | Prisma.ExpenseCreateWithoutGroupInput[] | Prisma.ExpenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutGroupInput | Prisma.ExpenseCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.ExpenseCreateManyGroupInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutGroupInput, Prisma.ExpenseUncheckedCreateWithoutGroupInput> | Prisma.ExpenseCreateWithoutGroupInput[] | Prisma.ExpenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutGroupInput | Prisma.ExpenseCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.ExpenseCreateManyGroupInputEnvelope;
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
};
export type ExpenseUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutGroupInput, Prisma.ExpenseUncheckedCreateWithoutGroupInput> | Prisma.ExpenseCreateWithoutGroupInput[] | Prisma.ExpenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutGroupInput | Prisma.ExpenseCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutGroupInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.ExpenseCreateManyGroupInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutGroupInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutGroupInput | Prisma.ExpenseUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type ExpenseUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutGroupInput, Prisma.ExpenseUncheckedCreateWithoutGroupInput> | Prisma.ExpenseCreateWithoutGroupInput[] | Prisma.ExpenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutGroupInput | Prisma.ExpenseCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.ExpenseUpsertWithWhereUniqueWithoutGroupInput | Prisma.ExpenseUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.ExpenseCreateManyGroupInputEnvelope;
    set?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    disconnect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    delete?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    connect?: Prisma.ExpenseWhereUniqueInput | Prisma.ExpenseWhereUniqueInput[];
    update?: Prisma.ExpenseUpdateWithWhereUniqueWithoutGroupInput | Prisma.ExpenseUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.ExpenseUpdateManyWithWhereWithoutGroupInput | Prisma.ExpenseUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ExpenseCreateNestedOneWithoutSplitsInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutSplitsInput;
    connect?: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseUpdateOneRequiredWithoutSplitsNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
    connectOrCreate?: Prisma.ExpenseCreateOrConnectWithoutSplitsInput;
    upsert?: Prisma.ExpenseUpsertWithoutSplitsInput;
    connect?: Prisma.ExpenseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExpenseUpdateToOneWithWhereWithoutSplitsInput, Prisma.ExpenseUpdateWithoutSplitsInput>, Prisma.ExpenseUncheckedUpdateWithoutSplitsInput>;
};
export type ExpenseCreateWithoutPaidByInput = {
    description: string;
    amount: number;
    date?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutExpensesInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutExpenseInput;
};
export type ExpenseUncheckedCreateWithoutPaidByInput = {
    id?: number;
    description: string;
    amount: number;
    date?: Date | string;
    groupId: number;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput;
};
export type ExpenseCreateOrConnectWithoutPaidByInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput>;
};
export type ExpenseCreateManyPaidByInputEnvelope = {
    data: Prisma.ExpenseCreateManyPaidByInput | Prisma.ExpenseCreateManyPaidByInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpsertWithWhereUniqueWithoutPaidByInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutPaidByInput, Prisma.ExpenseUncheckedUpdateWithoutPaidByInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutPaidByInput, Prisma.ExpenseUncheckedCreateWithoutPaidByInput>;
};
export type ExpenseUpdateWithWhereUniqueWithoutPaidByInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutPaidByInput, Prisma.ExpenseUncheckedUpdateWithoutPaidByInput>;
};
export type ExpenseUpdateManyWithWhereWithoutPaidByInput = {
    where: Prisma.ExpenseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyWithoutPaidByInput>;
};
export type ExpenseScalarWhereInput = {
    AND?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
    OR?: Prisma.ExpenseScalarWhereInput[];
    NOT?: Prisma.ExpenseScalarWhereInput | Prisma.ExpenseScalarWhereInput[];
    id?: Prisma.IntFilter<"Expense"> | number;
    description?: Prisma.StringFilter<"Expense"> | string;
    amount?: Prisma.FloatFilter<"Expense"> | number;
    date?: Prisma.DateTimeFilter<"Expense"> | Date | string;
    groupId?: Prisma.IntFilter<"Expense"> | number;
    paidById?: Prisma.IntFilter<"Expense"> | number;
};
export type ExpenseCreateWithoutGroupInput = {
    description: string;
    amount: number;
    date?: Date | string;
    paidBy: Prisma.UserCreateNestedOneWithoutPaidExpensesInput;
    splits?: Prisma.ExpenseSplitCreateNestedManyWithoutExpenseInput;
};
export type ExpenseUncheckedCreateWithoutGroupInput = {
    id?: number;
    description: string;
    amount: number;
    date?: Date | string;
    paidById: number;
    splits?: Prisma.ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput;
};
export type ExpenseCreateOrConnectWithoutGroupInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutGroupInput, Prisma.ExpenseUncheckedCreateWithoutGroupInput>;
};
export type ExpenseCreateManyGroupInputEnvelope = {
    data: Prisma.ExpenseCreateManyGroupInput | Prisma.ExpenseCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type ExpenseUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutGroupInput, Prisma.ExpenseUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutGroupInput, Prisma.ExpenseUncheckedCreateWithoutGroupInput>;
};
export type ExpenseUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutGroupInput, Prisma.ExpenseUncheckedUpdateWithoutGroupInput>;
};
export type ExpenseUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.ExpenseScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyWithoutGroupInput>;
};
export type ExpenseCreateWithoutSplitsInput = {
    description: string;
    amount: number;
    date?: Date | string;
    group: Prisma.GroupCreateNestedOneWithoutExpensesInput;
    paidBy: Prisma.UserCreateNestedOneWithoutPaidExpensesInput;
};
export type ExpenseUncheckedCreateWithoutSplitsInput = {
    id?: number;
    description: string;
    amount: number;
    date?: Date | string;
    groupId: number;
    paidById: number;
};
export type ExpenseCreateOrConnectWithoutSplitsInput = {
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
};
export type ExpenseUpsertWithoutSplitsInput = {
    update: Prisma.XOR<Prisma.ExpenseUpdateWithoutSplitsInput, Prisma.ExpenseUncheckedUpdateWithoutSplitsInput>;
    create: Prisma.XOR<Prisma.ExpenseCreateWithoutSplitsInput, Prisma.ExpenseUncheckedCreateWithoutSplitsInput>;
    where?: Prisma.ExpenseWhereInput;
};
export type ExpenseUpdateToOneWithWhereWithoutSplitsInput = {
    where?: Prisma.ExpenseWhereInput;
    data: Prisma.XOR<Prisma.ExpenseUpdateWithoutSplitsInput, Prisma.ExpenseUncheckedUpdateWithoutSplitsInput>;
};
export type ExpenseUpdateWithoutSplitsInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutExpensesNestedInput;
    paidBy?: Prisma.UserUpdateOneRequiredWithoutPaidExpensesNestedInput;
};
export type ExpenseUncheckedUpdateWithoutSplitsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    paidById?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseCreateManyPaidByInput = {
    id?: number;
    description: string;
    amount: number;
    date?: Date | string;
    groupId: number;
};
export type ExpenseUpdateWithoutPaidByInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    group?: Prisma.GroupUpdateOneRequiredWithoutExpensesNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateWithoutPaidByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateManyWithoutPaidByInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseCreateManyGroupInput = {
    id?: number;
    description: string;
    amount: number;
    date?: Date | string;
    paidById: number;
};
export type ExpenseUpdateWithoutGroupInput = {
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidBy?: Prisma.UserUpdateOneRequiredWithoutPaidExpensesNestedInput;
    splits?: Prisma.ExpenseSplitUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidById?: Prisma.IntFieldUpdateOperationsInput | number;
    splits?: Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput;
};
export type ExpenseUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidById?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseCountOutputType = {
    splits: number;
};
export type ExpenseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    splits?: boolean | ExpenseCountOutputTypeCountSplitsArgs;
};
export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseCountOutputTypeSelect<ExtArgs> | null;
};
export type ExpenseCountOutputTypeCountSplitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
};
export type ExpenseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    amount?: boolean;
    date?: boolean;
    groupId?: boolean;
    paidById?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    splits?: boolean | Prisma.Expense$splitsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expense"]>;
export type ExpenseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    amount?: boolean;
    date?: boolean;
    groupId?: boolean;
    paidById?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expense"]>;
export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    amount?: boolean;
    date?: boolean;
    groupId?: boolean;
    paidById?: boolean;
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expense"]>;
export type ExpenseSelectScalar = {
    id?: boolean;
    description?: boolean;
    amount?: boolean;
    date?: boolean;
    groupId?: boolean;
    paidById?: boolean;
};
export type ExpenseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "description" | "amount" | "date" | "groupId" | "paidById", ExtArgs["result"]["expense"]>;
export type ExpenseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    splits?: boolean | Prisma.Expense$splitsArgs<ExtArgs>;
    _count?: boolean | Prisma.ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.GroupDefaultArgs<ExtArgs>;
    paidBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ExpensePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Expense";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs>;
        paidBy: Prisma.$UserPayload<ExtArgs>;
        splits: Prisma.$ExpenseSplitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        description: string;
        amount: number;
        date: Date;
        groupId: number;
        paidById: number;
    }, ExtArgs["result"]["expense"]>;
    composites: {};
};
export type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpensePayload, S>;
export type ExpenseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseCountAggregateInputType | true;
};
export interface ExpenseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Expense'];
        meta: {
            name: 'Expense';
        };
    };
    findUnique<T extends ExpenseFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseCreateArgs>(args: Prisma.SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExpenseDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExpenseUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseCountArgs>(args?: Prisma.Subset<T, ExpenseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseAggregateArgs>(args: Prisma.Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;
    groupBy<T extends ExpenseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseFieldRefs;
}
export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.GroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GroupDefaultArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    paidBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    splits<T extends Prisma.Expense$splitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Expense$splitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseFieldRefs {
    readonly id: Prisma.FieldRef<"Expense", 'Int'>;
    readonly description: Prisma.FieldRef<"Expense", 'String'>;
    readonly amount: Prisma.FieldRef<"Expense", 'Float'>;
    readonly date: Prisma.FieldRef<"Expense", 'DateTime'>;
    readonly groupId: Prisma.FieldRef<"Expense", 'Int'>;
    readonly paidById: Prisma.FieldRef<"Expense", 'Int'>;
}
export type ExpenseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseCreateInput, Prisma.ExpenseUncheckedCreateInput>;
};
export type ExpenseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseCreateManyInput | Prisma.ExpenseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    data: Prisma.ExpenseCreateManyInput | Prisma.ExpenseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExpenseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExpenseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseUpdateInput, Prisma.ExpenseUncheckedUpdateInput>;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
};
export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseUpdateManyMutationInput, Prisma.ExpenseUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
    include?: Prisma.ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExpenseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseCreateInput, Prisma.ExpenseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseUpdateInput, Prisma.ExpenseUncheckedUpdateInput>;
};
export type ExpenseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
    where: Prisma.ExpenseWhereUniqueInput;
};
export type ExpenseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseWhereInput;
    limit?: number;
};
export type Expense$splitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseOmit<ExtArgs> | null;
    include?: Prisma.ExpenseInclude<ExtArgs> | null;
};

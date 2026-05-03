import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExpenseSplitModel = runtime.Types.Result.DefaultSelection<Prisma.$ExpenseSplitPayload>;
export type AggregateExpenseSplit = {
    _count: ExpenseSplitCountAggregateOutputType | null;
    _avg: ExpenseSplitAvgAggregateOutputType | null;
    _sum: ExpenseSplitSumAggregateOutputType | null;
    _min: ExpenseSplitMinAggregateOutputType | null;
    _max: ExpenseSplitMaxAggregateOutputType | null;
};
export type ExpenseSplitAvgAggregateOutputType = {
    id: number | null;
    amount: number | null;
    expenseId: number | null;
    userId: number | null;
};
export type ExpenseSplitSumAggregateOutputType = {
    id: number | null;
    amount: number | null;
    expenseId: number | null;
    userId: number | null;
};
export type ExpenseSplitMinAggregateOutputType = {
    id: number | null;
    amount: number | null;
    expenseId: number | null;
    userId: number | null;
};
export type ExpenseSplitMaxAggregateOutputType = {
    id: number | null;
    amount: number | null;
    expenseId: number | null;
    userId: number | null;
};
export type ExpenseSplitCountAggregateOutputType = {
    id: number;
    amount: number;
    expenseId: number;
    userId: number;
    _all: number;
};
export type ExpenseSplitAvgAggregateInputType = {
    id?: true;
    amount?: true;
    expenseId?: true;
    userId?: true;
};
export type ExpenseSplitSumAggregateInputType = {
    id?: true;
    amount?: true;
    expenseId?: true;
    userId?: true;
};
export type ExpenseSplitMinAggregateInputType = {
    id?: true;
    amount?: true;
    expenseId?: true;
    userId?: true;
};
export type ExpenseSplitMaxAggregateInputType = {
    id?: true;
    amount?: true;
    expenseId?: true;
    userId?: true;
};
export type ExpenseSplitCountAggregateInputType = {
    id?: true;
    amount?: true;
    expenseId?: true;
    userId?: true;
    _all?: true;
};
export type ExpenseSplitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithRelationInput | Prisma.ExpenseSplitOrderByWithRelationInput[];
    cursor?: Prisma.ExpenseSplitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExpenseSplitCountAggregateInputType;
    _avg?: ExpenseSplitAvgAggregateInputType;
    _sum?: ExpenseSplitSumAggregateInputType;
    _min?: ExpenseSplitMinAggregateInputType;
    _max?: ExpenseSplitMaxAggregateInputType;
};
export type GetExpenseSplitAggregateType<T extends ExpenseSplitAggregateArgs> = {
    [P in keyof T & keyof AggregateExpenseSplit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpenseSplit[P]> : Prisma.GetScalarType<T[P], AggregateExpenseSplit[P]>;
};
export type ExpenseSplitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
    orderBy?: Prisma.ExpenseSplitOrderByWithAggregationInput | Prisma.ExpenseSplitOrderByWithAggregationInput[];
    by: Prisma.ExpenseSplitScalarFieldEnum[] | Prisma.ExpenseSplitScalarFieldEnum;
    having?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseSplitCountAggregateInputType | true;
    _avg?: ExpenseSplitAvgAggregateInputType;
    _sum?: ExpenseSplitSumAggregateInputType;
    _min?: ExpenseSplitMinAggregateInputType;
    _max?: ExpenseSplitMaxAggregateInputType;
};
export type ExpenseSplitGroupByOutputType = {
    id: number;
    amount: number;
    expenseId: number;
    userId: number;
    _count: ExpenseSplitCountAggregateOutputType | null;
    _avg: ExpenseSplitAvgAggregateOutputType | null;
    _sum: ExpenseSplitSumAggregateOutputType | null;
    _min: ExpenseSplitMinAggregateOutputType | null;
    _max: ExpenseSplitMaxAggregateOutputType | null;
};
export type GetExpenseSplitGroupByPayload<T extends ExpenseSplitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExpenseSplitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExpenseSplitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExpenseSplitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExpenseSplitGroupByOutputType[P]>;
}>>;
export type ExpenseSplitWhereInput = {
    AND?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    OR?: Prisma.ExpenseSplitWhereInput[];
    NOT?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    id?: Prisma.IntFilter<"ExpenseSplit"> | number;
    amount?: Prisma.FloatFilter<"ExpenseSplit"> | number;
    expenseId?: Prisma.IntFilter<"ExpenseSplit"> | number;
    userId?: Prisma.IntFilter<"ExpenseSplit"> | number;
    expense?: Prisma.XOR<Prisma.ExpenseScalarRelationFilter, Prisma.ExpenseWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ExpenseSplitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expense?: Prisma.ExpenseOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ExpenseSplitWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    OR?: Prisma.ExpenseSplitWhereInput[];
    NOT?: Prisma.ExpenseSplitWhereInput | Prisma.ExpenseSplitWhereInput[];
    amount?: Prisma.FloatFilter<"ExpenseSplit"> | number;
    expenseId?: Prisma.IntFilter<"ExpenseSplit"> | number;
    userId?: Prisma.IntFilter<"ExpenseSplit"> | number;
    expense?: Prisma.XOR<Prisma.ExpenseScalarRelationFilter, Prisma.ExpenseWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ExpenseSplitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.ExpenseSplitCountOrderByAggregateInput;
    _avg?: Prisma.ExpenseSplitAvgOrderByAggregateInput;
    _max?: Prisma.ExpenseSplitMaxOrderByAggregateInput;
    _min?: Prisma.ExpenseSplitMinOrderByAggregateInput;
    _sum?: Prisma.ExpenseSplitSumOrderByAggregateInput;
};
export type ExpenseSplitScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput | Prisma.ExpenseSplitScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExpenseSplitScalarWhereWithAggregatesInput | Prisma.ExpenseSplitScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ExpenseSplit"> | number;
    amount?: Prisma.FloatWithAggregatesFilter<"ExpenseSplit"> | number;
    expenseId?: Prisma.IntWithAggregatesFilter<"ExpenseSplit"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"ExpenseSplit"> | number;
};
export type ExpenseSplitCreateInput = {
    amount: number;
    expense: Prisma.ExpenseCreateNestedOneWithoutSplitsInput;
    user: Prisma.UserCreateNestedOneWithoutSplitsInput;
};
export type ExpenseSplitUncheckedCreateInput = {
    id?: number;
    amount: number;
    expenseId: number;
    userId: number;
};
export type ExpenseSplitUpdateInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expense?: Prisma.ExpenseUpdateOneRequiredWithoutSplitsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSplitsNestedInput;
};
export type ExpenseSplitUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseSplitCreateManyInput = {
    id?: number;
    amount: number;
    expenseId: number;
    userId: number;
};
export type ExpenseSplitUpdateManyMutationInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ExpenseSplitUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseSplitListRelationFilter = {
    every?: Prisma.ExpenseSplitWhereInput;
    some?: Prisma.ExpenseSplitWhereInput;
    none?: Prisma.ExpenseSplitWhereInput;
};
export type ExpenseSplitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExpenseSplitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpenseSplitAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpenseSplitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpenseSplitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpenseSplitSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    expenseId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ExpenseSplitCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type ExpenseSplitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput> | Prisma.ExpenseSplitCreateWithoutUserInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutUserInput | Prisma.ExpenseSplitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ExpenseSplitCreateManyUserInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type ExpenseSplitCreateNestedManyWithoutExpenseInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
};
export type ExpenseSplitUpdateManyWithoutExpenseNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type ExpenseSplitUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput> | Prisma.ExpenseSplitCreateWithoutExpenseInput[] | Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput | Prisma.ExpenseSplitCreateOrConnectWithoutExpenseInput[];
    upsert?: Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: Prisma.ExpenseSplitCreateManyExpenseInputEnvelope;
    set?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    disconnect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    delete?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    connect?: Prisma.ExpenseSplitWhereUniqueInput | Prisma.ExpenseSplitWhereUniqueInput[];
    update?: Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput | Prisma.ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?: Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput | Prisma.ExpenseSplitUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
};
export type ExpenseSplitCreateWithoutUserInput = {
    amount: number;
    expense: Prisma.ExpenseCreateNestedOneWithoutSplitsInput;
};
export type ExpenseSplitUncheckedCreateWithoutUserInput = {
    id?: number;
    amount: number;
    expenseId: number;
};
export type ExpenseSplitCreateOrConnectWithoutUserInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput>;
};
export type ExpenseSplitCreateManyUserInputEnvelope = {
    data: Prisma.ExpenseSplitCreateManyUserInput | Prisma.ExpenseSplitCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ExpenseSplitUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutUserInput, Prisma.ExpenseSplitUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutUserInput, Prisma.ExpenseSplitUncheckedCreateWithoutUserInput>;
};
export type ExpenseSplitUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutUserInput, Prisma.ExpenseSplitUncheckedUpdateWithoutUserInput>;
};
export type ExpenseSplitUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ExpenseSplitScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateManyMutationInput, Prisma.ExpenseSplitUncheckedUpdateManyWithoutUserInput>;
};
export type ExpenseSplitScalarWhereInput = {
    AND?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
    OR?: Prisma.ExpenseSplitScalarWhereInput[];
    NOT?: Prisma.ExpenseSplitScalarWhereInput | Prisma.ExpenseSplitScalarWhereInput[];
    id?: Prisma.IntFilter<"ExpenseSplit"> | number;
    amount?: Prisma.FloatFilter<"ExpenseSplit"> | number;
    expenseId?: Prisma.IntFilter<"ExpenseSplit"> | number;
    userId?: Prisma.IntFilter<"ExpenseSplit"> | number;
};
export type ExpenseSplitCreateWithoutExpenseInput = {
    amount: number;
    user: Prisma.UserCreateNestedOneWithoutSplitsInput;
};
export type ExpenseSplitUncheckedCreateWithoutExpenseInput = {
    id?: number;
    amount: number;
    userId: number;
};
export type ExpenseSplitCreateOrConnectWithoutExpenseInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput>;
};
export type ExpenseSplitCreateManyExpenseInputEnvelope = {
    data: Prisma.ExpenseSplitCreateManyExpenseInput | Prisma.ExpenseSplitCreateManyExpenseInput[];
    skipDuplicates?: boolean;
};
export type ExpenseSplitUpsertWithWhereUniqueWithoutExpenseInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedUpdateWithoutExpenseInput>;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedCreateWithoutExpenseInput>;
};
export type ExpenseSplitUpdateWithWhereUniqueWithoutExpenseInput = {
    where: Prisma.ExpenseSplitWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateWithoutExpenseInput, Prisma.ExpenseSplitUncheckedUpdateWithoutExpenseInput>;
};
export type ExpenseSplitUpdateManyWithWhereWithoutExpenseInput = {
    where: Prisma.ExpenseSplitScalarWhereInput;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateManyMutationInput, Prisma.ExpenseSplitUncheckedUpdateManyWithoutExpenseInput>;
};
export type ExpenseSplitCreateManyUserInput = {
    id?: number;
    amount: number;
    expenseId: number;
};
export type ExpenseSplitUpdateWithoutUserInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expense?: Prisma.ExpenseUpdateOneRequiredWithoutSplitsNestedInput;
};
export type ExpenseSplitUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseSplitUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    expenseId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseSplitCreateManyExpenseInput = {
    id?: number;
    amount: number;
    userId: number;
};
export type ExpenseSplitUpdateWithoutExpenseInput = {
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutSplitsNestedInput;
};
export type ExpenseSplitUncheckedUpdateWithoutExpenseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseSplitUncheckedUpdateManyWithoutExpenseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExpenseSplitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    expenseId?: boolean;
    userId?: boolean;
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseSplit"]>;
export type ExpenseSplitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    expenseId?: boolean;
    userId?: boolean;
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseSplit"]>;
export type ExpenseSplitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    expenseId?: boolean;
    userId?: boolean;
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expenseSplit"]>;
export type ExpenseSplitSelectScalar = {
    id?: boolean;
    amount?: boolean;
    expenseId?: boolean;
    userId?: boolean;
};
export type ExpenseSplitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "expenseId" | "userId", ExtArgs["result"]["expenseSplit"]>;
export type ExpenseSplitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ExpenseSplitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ExpenseSplitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expense?: boolean | Prisma.ExpenseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ExpenseSplitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExpenseSplit";
    objects: {
        expense: Prisma.$ExpensePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        amount: number;
        expenseId: number;
        userId: number;
    }, ExtArgs["result"]["expenseSplit"]>;
    composites: {};
};
export type ExpenseSplitGetPayload<S extends boolean | null | undefined | ExpenseSplitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload, S>;
export type ExpenseSplitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExpenseSplitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseSplitCountAggregateInputType | true;
};
export interface ExpenseSplitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExpenseSplit'];
        meta: {
            name: 'ExpenseSplit';
        };
    };
    findUnique<T extends ExpenseSplitFindUniqueArgs>(args: Prisma.SelectSubset<T, ExpenseSplitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExpenseSplitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExpenseSplitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExpenseSplitFindFirstArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExpenseSplitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExpenseSplitFindManyArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExpenseSplitCreateArgs>(args: Prisma.SelectSubset<T, ExpenseSplitCreateArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExpenseSplitCreateManyArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExpenseSplitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExpenseSplitDeleteArgs>(args: Prisma.SelectSubset<T, ExpenseSplitDeleteArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExpenseSplitUpdateArgs>(args: Prisma.SelectSubset<T, ExpenseSplitUpdateArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExpenseSplitDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExpenseSplitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExpenseSplitUpdateManyArgs>(args: Prisma.SelectSubset<T, ExpenseSplitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExpenseSplitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExpenseSplitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExpenseSplitUpsertArgs>(args: Prisma.SelectSubset<T, ExpenseSplitUpsertArgs<ExtArgs>>): Prisma.Prisma__ExpenseSplitClient<runtime.Types.Result.GetResult<Prisma.$ExpenseSplitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExpenseSplitCountArgs>(args?: Prisma.Subset<T, ExpenseSplitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExpenseSplitCountAggregateOutputType> : number>;
    aggregate<T extends ExpenseSplitAggregateArgs>(args: Prisma.Subset<T, ExpenseSplitAggregateArgs>): Prisma.PrismaPromise<GetExpenseSplitAggregateType<T>>;
    groupBy<T extends ExpenseSplitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExpenseSplitGroupByArgs['orderBy'];
    } : {
        orderBy?: ExpenseSplitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExpenseSplitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseSplitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExpenseSplitFieldRefs;
}
export interface Prisma__ExpenseSplitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    expense<T extends Prisma.ExpenseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExpenseDefaultArgs<ExtArgs>>): Prisma.Prisma__ExpenseClient<runtime.Types.Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExpenseSplitFieldRefs {
    readonly id: Prisma.FieldRef<"ExpenseSplit", 'Int'>;
    readonly amount: Prisma.FieldRef<"ExpenseSplit", 'Float'>;
    readonly expenseId: Prisma.FieldRef<"ExpenseSplit", 'Int'>;
    readonly userId: Prisma.FieldRef<"ExpenseSplit", 'Int'>;
}
export type ExpenseSplitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseSplitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseSplitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExpenseSplitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseSplitCreateInput, Prisma.ExpenseSplitUncheckedCreateInput>;
};
export type ExpenseSplitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExpenseSplitCreateManyInput | Prisma.ExpenseSplitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExpenseSplitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    data: Prisma.ExpenseSplitCreateManyInput | Prisma.ExpenseSplitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExpenseSplitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExpenseSplitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateInput, Prisma.ExpenseSplitUncheckedUpdateInput>;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateManyMutationInput, Prisma.ExpenseSplitUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseSplitWhereInput;
    limit?: number;
};
export type ExpenseSplitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExpenseSplitUpdateManyMutationInput, Prisma.ExpenseSplitUncheckedUpdateManyInput>;
    where?: Prisma.ExpenseSplitWhereInput;
    limit?: number;
    include?: Prisma.ExpenseSplitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExpenseSplitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExpenseSplitCreateInput, Prisma.ExpenseSplitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExpenseSplitUpdateInput, Prisma.ExpenseSplitUncheckedUpdateInput>;
};
export type ExpenseSplitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
    where: Prisma.ExpenseSplitWhereUniqueInput;
};
export type ExpenseSplitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExpenseSplitWhereInput;
    limit?: number;
};
export type ExpenseSplitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExpenseSplitSelect<ExtArgs> | null;
    omit?: Prisma.ExpenseSplitOmit<ExtArgs> | null;
    include?: Prisma.ExpenseSplitInclude<ExtArgs> | null;
};

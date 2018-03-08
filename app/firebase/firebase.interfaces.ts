export interface QueryData {
    orderBy: OrderBy
}

export interface OrderBy {
    fieldPath: string,
    direction: 'desc' | 'asc'
}
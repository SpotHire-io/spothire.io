export type MetadataType = 'string' | 'number' | 'boolean'

export interface Metadata {
    id: number
    key: string
    type: MetadataType
    value?: string
}

export type MetaPairs = Metadata[]

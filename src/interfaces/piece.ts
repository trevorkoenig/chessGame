export enum PieceType {
    p = "Pawn",
    r = "Rook",
    kn = "Knight",
    b = "Bishop",
    q = "Queen",
    k = "King"
}

export interface Piece {
    ID: number //1 or 2
    kind: PieceType
    color: number //0 for white and 1 for black
} 
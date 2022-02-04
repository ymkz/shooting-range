import copy
import numpy

def input_with_validate():
  # 盤面の大きさと手番の入力
  field_size, your_stone=(int(x) for x in input().split())

  # 盤面の大きさの入力チェック
  if field_size < 5 or field_size > 20:
    print("This game is Gomokunarabe! Field size must more than 5")
    exit(1)

  # 手番の入力チェック
  if your_stone != 0 and your_stone != 1:
    print("Invalid input on input line 1")
    exit(1)

  # 盤面の入力
  field_grid = [list(map(int, input().split())) for _ in range(field_size)]

  # 盤面の入力チェック
  for index, field_grid_row in enumerate(field_grid):
    if len(field_grid_row) != field_size:
      print("Invalid input length on input line ", index + 2)
      exit(1)

  enemy_stone = 0 if your_stone == 1 else 1

  return field_size, field_grid, your_stone, enemy_stone


# 勝利条件となる碁石が5つ並んでいる場合conditionにその座標を追加
def check(x, y, line, winable_stone, condition):
  current_stone = -1
  chain_count = 0
  for stone in line:
    if (stone == winable_stone):
      if (stone == current_stone):
        chain_count += 1
        if chain_count == 5:
          condition.append([x + 1, y + 1])
      else:
        current_stone = stone
        chain_count = 1
    else:
      current_stone = -1

# 横・縦・ナナメ右下・ナナメ右上の4パターンでラインごとにチェックする
def judge(x, y, grid, winable_stone, condition):
  for horizontal_line in grid:
    check(x, y, horizontal_line, winable_stone, condition)
  for vertical_line in zip(*your_next_field_grid):
    check(x, y, vertical_line, winable_stone, condition)
  for k in list(range(5 - field_size, field_size - 5 + 1)):
    check(x, y, list(numpy.diag(numpy.array(grid), k)), winable_stone, condition)
    check(x, y, list(numpy.diag(numpy.fliplr(numpy.array(grid)), k)), winable_stone, condition)
    
##########
##########
##########

field_size, field_grid, your_stone, enemy_stone = input_with_validate()
win_condition = []
lose_condition = []

# 一つづつ自分の碁石と相手の碁石を置いた碁盤を対象にチェックする
for y in range(field_size):
  for x in range(field_size):
    if field_grid[y][x] == -1:
      your_next_field_grid = copy.deepcopy(field_grid)
      enemy_next_field_grid = copy.deepcopy(field_grid)
      your_next_field_grid[y][x] = your_stone
      enemy_next_field_grid[y][x] = enemy_stone
      judge(x, y, your_next_field_grid, your_stone, win_condition)
      judge(x, y, enemy_next_field_grid, enemy_stone, lose_condition)

# 出力
# win_conditionもlose_conditionもない場合は、自分の手番でも相手の手番でも勝敗がつかないため適当に碁石の無い場所を出力
if (not len(win_condition) and not len(lose_condition)):
  array = numpy.array(field_grid)
  x, y = tuple(nd[0] for nd in numpy.where(array == -1))
  print(x + 1, y + 1)
# win_conditionがひとつ以上ある場合は勝利パターンで出力
elif (len(win_condition) > 0):
  x, y = win_condition[0]
  print(x, y)
# lose_conditionがひとつのみの場合は敗北回避パターンで出力
elif (len(lose_condition) == 1):
  x, y = lose_condition[0]
  print(x, y)
# lose_conditionがひとつ以外の場合は敗北パターン
else:
  print("LOSE")
from PIL import Image

# 打开原始图片
original_image = Image.open("./logo.png")  # 替换为你的图片路径

# 获取原始图片的尺寸
width, height = original_image.size

# 创建一个 800x800 的新图像，背景颜色可以设置为白色
new_image = Image.new("RGBA", (800, 800), (0, 0, 0, 0))  # (255, 255, 255) 是白色

# 计算居中的位置
left = (800 - width) // 2
top = (800 - height) // 2

# 将原始图像粘贴到新图像上
new_image.paste(
    original_image, (left, top), original_image.convert("RGBA").getchannel("A")
)

# 保存新的图片
new_image.save("800x800.png")  # 输出为新的图片路径

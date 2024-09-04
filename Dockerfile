FROM node:18

WORKDIR /app

# グローバルに chokidar をインストール
RUN yarn global add chokidar

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN yarn install

# コンテナ内で作業するユーザーを node に設定
USER node

# 3000番ポートを公開
EXPOSE 3000
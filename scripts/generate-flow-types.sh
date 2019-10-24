# /bin/sh

for file in $(find ./lib -name *.d.ts -type f); do flowgen --add-flow-header ${file} -o ${file/.d.ts/.js.flow}; done;

BIN = ./node_modules/.bin
MAIN = clubhouse.js
TEST = test/clubhouse_test.clj

doc:
	$(BIN)/documentation readme $(MAIN) --readme-file README.md --section "FULL API"

importing_data.html: tutorials/importing_data.md
	pandoc -s -c tutorials/github-pandoc.css --self-contained tutorials/importing_data.md > importing_data.html

docs-serve:
	$(BIN)/documentation serve -w $(MAIN)

clean:
	rm -rf coverage
	rm -f importing_data.html

test:
	$(BIN)/istanbul cover $(BIN)/_mocha -- -R spec

test-raw:
	$(BIN)/mocha -R spec

lint:
	$(BIN)/eslint $(MAIN) $(TEST)

all: clean lint test doc

.PHONY: doc clean test lint test-raw docs-server

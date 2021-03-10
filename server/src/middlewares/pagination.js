import { errorResponse } from "../components/util";

export function paginate(entity, relations = [], where = "") {
  return async (req, res, next) => {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      let paginated = {
        from: startIndex,
        to: endIndex,
        current_page: page,
        prev_page: null,
        next_page: null,
      };
      const query = entity.createQueryBuilder("data");
      query.take(limit);
      query.skip(startIndex);
      relations.forEach((relation) => {
        query.leftJoinAndSelect(relation[0], relation[1]);
      });
      if (where !== "") {
        query.where(where);
      }
      const [data, total] = await query.getManyAndCount();

      paginated.data = data;
      paginated.total = total;

      if (endIndex < total) {
        paginated.next_page = {
          page: page + 1,
          limit,
        };
      }
      if (startIndex > 0) {
        paginated.prev_page = {
          page: page - 1,
          limit,
        };
      }
      req.paginated = paginated;
      next();
    } catch (error) {
      console.log(error);
      res.status(400).send(errorResponse(error));
    }
  };
}

export function sendPaginatedData(req, res) {
  try {
    res.send(req.paginated);
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
}

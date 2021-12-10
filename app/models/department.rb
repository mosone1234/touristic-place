class Department < ApplicationRecord
    include Featurable

    featurable :geom, [:dep_name]
end
